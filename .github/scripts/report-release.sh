#!/usr/bin/env bash
# Invoked for a merged mirror commit, from the protected main branch.
set -euo pipefail

version="$(jq -er '.version | select(test("^[0-9]+\\.[0-9]+\\.[0-9]+$"))' .release-source.json)"
source_sha="$(jq -er '.sourceSha | select(test("^[0-9a-f]{40}$"))' .release-source.json)"
branch="release/code-scan-action-v${version}"
repo_api="repos/${GITHUB_REPOSITORY}"
repo_url="${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}"
run_url="${repo_url}/actions/runs/${GITHUB_RUN_ID}/attempts/${GITHUB_RUN_ATTEMPT}"
marker='<!-- code-scan-action-publication -->'

# Match the merge commit and the release branch; a maintenance push is not a release PR.
pr="$(gh api "${repo_api}/commits/${GITHUB_SHA}/pulls" | jq -r \
  --arg repository "$GITHUB_REPOSITORY" --arg branch "$branch" --arg sha "$GITHUB_SHA" '
    .[] | select(.head.repo.full_name == $repository and .head.ref == $branch
      and .base.ref == "main" and .merged_at and .merge_commit_sha == $sha) | .number
  ')"
if [[ -z "$pr" ]]; then
  echo "No matching merged release PR for ${GITHUB_SHA}."
  exit 0
fi

cli_version="$(gh api -H 'Accept: application/vnd.github.raw+json' \
  "repos/promptfoo/promptfoo/contents/package.json?ref=${source_sha}" | \
  jq -er '.version | select(test("^[0-9]+\\.[0-9]+\\.[0-9]+$"))')"
body="${RUNNER_TEMP}/action-publication.md"
tags=("v${version}" "v${version%.*}" "v${version%%.*}")
refs=()
for tag in "${tags[@]}"; do
  refs+=("refs/tags/$tag" "refs/tags/${tag}^{}")
done
remote_refs="$(git ls-remote origin refs/heads/main "${refs[@]}")"
main_sha="$(awk '$2 == "refs/heads/main" { print $1 }' <<< "$remote_refs")"
[[ "$main_sha" =~ ^[0-9a-f]{40}$ ]]
# The same ref snapshot identifies both the tag targets and the source currently on main.
current_release=true
if [[ "$main_sha" != "$GITHUB_SHA" ]]; then
  current_release="$(gh api -H 'Accept: application/vnd.github.raw+json' \
    "${repo_api}/contents/.release-source.json?ref=${main_sha}" | jq -r \
    --arg version "$version" --arg sha "$source_sha" '.version == $version and .sourceSha == $sha')"
fi

release_commit() {
  # Annotated tags have an object ID and a peeled commit; lightweight tags have only the commit.
  awk -v ref="refs/tags/$1" '$2 == ref { tag=$1 } $2 == ref "^{}" { peeled=$1 }
    END { print peeled ? peeled : tag }' <<< "$remote_refs"
}
aliases_match=true
for alias in "${tags[@]:1}"; do
  if [[ "$(release_commit "$alias")" != "$GITHUB_SHA" ]]; then
    aliases_match=false
  fi
done
exact_sha="$(release_commit "${tags[0]}")"
released=false
if [[ "$exact_sha" == "$GITHUB_SHA" ]]; then
  if draft="$(gh release view "${tags[0]}" --repo "$GITHUB_REPOSITORY" --json isDraft --jq .isDraft)" && [[ "$draft" == "false" ]]; then
    released=true
  fi
fi

{
  printf '%s\n\n### Code Scan Action v%s\n\n' "$marker" "$version"
  if [[ "$released" == true ]]; then
    printf '[Published release](%s/releases/tag/v%s) at [%s](%s/commit/%s).\n\n' \
      "$repo_url" "$version" "${GITHUB_SHA:0:7}" "$repo_url" "$GITHUB_SHA"
  elif [[ "$PUBLICATION_RESULT" == "skipped" ]]; then
    printf 'Publication skipped because the source release on `main` changed.\n\n'
  else
    printf 'Publication could not be verified for the merged commit. See the release workflow.\n\n'
  fi
  for tag in "${tags[@]}"; do
    target="$(release_commit "$tag")"
    if [[ -n "$target" ]]; then
      printf -- '- `%s` → [%s](%s/commit/%s)\n' "$tag" "${target:0:7}" "$repo_url" "$target"
    else
      printf -- '- `%s` has no published ref.\n' "$tag"
    fi
  done
  printf '\n'
  if [[ "$current_release" == true && "$aliases_match" != true ]]; then
    printf 'The current release is missing one or more matching floating tags.\n\n'
  fi
  printf 'The action pins [promptfoo@%s](https://www.npmjs.com/package/promptfoo/v/%s).\n\n' \
    "$cli_version" "$cli_version"
  printf '[Source commit](https://github.com/promptfoo/promptfoo/commit/%s) · [Release workflow](%s)\n' \
    "$source_sha" "$run_url"
} > "$body"
cat "$body" >> "$GITHUB_STEP_SUMMARY"

comment_id="$(gh api --paginate "${repo_api}/issues/${pr}/comments?per_page=100" |
  jq -r --arg marker "$marker" '.[] | select(.user.login == "github-actions[bot]" and (.body | startswith($marker))) | .id')"
if [[ -n "$comment_id" ]]; then
  gh api --silent --method PATCH "${repo_api}/issues/comments/${comment_id}" -F "body=@${body}"
else
  gh api --silent --method POST "${repo_api}/issues/${pr}/comments" -F "body=@${body}"
fi

if [[ "$current_release" == true && "$aliases_match" != true ]]; then
  echo "::error::One or more floating tags do not point to current release ${GITHUB_SHA}."
  exit 1
fi

if [[ "$PUBLICATION_RESULT" == "published" && "$released" != true ]]; then
  echo "::error::Could not verify public release v${version} at ${GITHUB_SHA}."
  exit 1
fi
