# Promptfoo Code Scan GitHub Action

Automatically scan pull requests for security vulnerabilities using AI-powered analysis.

## Features

- 🔍 **AI-Powered Security Analysis**: Leverages Claude Agent SDK to identify security issues
- 💬 **Inline PR Comments**: Posts findings directly on the relevant lines of code
- ⚙️ **Configurable Severity**: Filter findings by minimum severity level
- 🎯 **Flexible Failure Modes**: Choose whether to fail builds on findings
- 📝 **YAML Configuration**: Use existing config files or generate on-the-fly

## Usage

```yaml
name: Security Scan

on:
  pull_request:
    types: [opened, synchronize]

permissions:
  id-token: write       # Required for GitHub OIDC authentication
  contents: read        # Required to checkout code
  pull-requests: write  # Required to post comments

jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Run security scan
        uses: promptfoo/code-scan-action@v1
        with:
          server-url: 'https://scanner.example.com'
          minimum-severity: 'medium'
          fail-on-vulnerabilities: 'high'
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

## Inputs

| Input | Description | Required | Default |
|-------|-------------|----------|---------|
| `server-url` | URL of the code-scan server | Yes | - |
| `github-token` | GitHub token for posting comments | Yes | - |
| `minimum-severity` | Minimum severity to report (low, medium, high, critical) | No | `medium` |
| `fail-on-vulnerabilities` | Fail the build if vulnerabilities are found (false, high, critical) | No | `false` |
| `config-path` | Path to YAML config file | No | Auto-generated |

### Input Details

#### `server-url`
The URL of your deployed code-scan server. For production use, this should be a public HTTPS endpoint.

#### `github-token`
The GitHub token used to post review comments. Use `${{ secrets.GITHUB_TOKEN }}` which is automatically provided by GitHub Actions.

#### `minimum-severity`
Controls which findings are reported. Options:
- `low`: Report all findings
- `medium`: Report medium, high, and critical findings
- `high`: Report only high and critical findings
- `critical`: Report only critical findings

#### `fail-on-vulnerabilities`
Controls whether the action fails the workflow. Options:
- `false`: Never fail (default, only post comments)
- `high`: Fail if high or critical vulnerabilities are found
- `critical`: Fail only if critical vulnerabilities are found

#### `config-path`
Optional path to a YAML configuration file. If not provided, a temporary config will be generated using the `minimum-severity` input.

Example config file:
```yaml
# code-scan.yml
minimumSeverity: medium
customRules:
  - name: "Check for SQL injection"
    severity: high
```

## Local Testing with Act

You can test the action locally using [act](https://github.com/nektos/act):

### Prerequisites

1. Install act:
   ```bash
   # macOS
   brew install act

   # Linux
   curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash
   ```

2. Start the code-scan server locally:
   ```bash
   cd code-scan/server
   npm run dev
   ```

### Running Tests

```bash
# Run the test workflow
act pull_request -W .github/workflows/test-scan.yml

# With event payload
act pull_request -W .github/workflows/test-scan.yml \
  -e .github/workflows/test-event.json
```

### Test Event Payload

Create `.github/workflows/test-event.json`:

```json
{
  "pull_request": {
    "number": 1,
    "head": {
      "ref": "feature-branch",
      "sha": "abc123"
    },
    "base": {
      "ref": "main"
    }
  },
  "repository": {
    "name": "test-repo",
    "owner": {
      "login": "test-owner"
    }
  }
}
```

### Local Server Configuration

The test workflow uses `http://host.docker.internal:2095` to connect to your local server from within act's Docker container. Make sure:

1. Your server is running on port `2095` (or update the workflow)
2. GitHub OIDC auth is disabled in development:
   ```bash
   # In server/.env
   GITHUB_OIDC_ENABLED=false
   ```

## Architecture

This action:

1. **Validates Context**: Ensures it's running in a pull request
2. **Authenticates**: Obtains GitHub OIDC token for server authentication
3. **Generates Config**: Creates or uses provided YAML configuration
4. **Runs CLI**: Executes `@promptfoo/code-scan-cli` with `--json` output
5. **Parses Results**: Extracts structured comments from JSON response
6. **Posts Comments**: Uses Octokit to post inline PR comments
7. **Handles Failures**: Optionally fails the workflow based on findings

The server handles all the heavy lifting:
- Clones and analyzes the repository
- Runs AI-powered security analysis
- Generates structured findings in XML format
- Parses XML to JSON for consumption

## Requirements

### Server Setup

You need a running code-scan server. See the [server documentation](../server/README.md) for deployment instructions.

Required environment variables on the server:
```bash
ANTHROPIC_API_KEY=your_api_key
GITHUB_OIDC_ENABLED=true
GITHUB_OIDC_AUDIENCE=https://scanner.example.com
```

### GitHub Repository Permissions

The action requires these permissions in your workflow:
- `id-token: write` - For GitHub OIDC authentication
- `contents: read` - To checkout the code
- `pull-requests: write` - To post review comments

## Troubleshooting

### Action fails with "Not in a pull request context"

Make sure your workflow triggers on `pull_request` events:
```yaml
on:
  pull_request:
    types: [opened, synchronize]
```

### Comments not posting

Check that:
1. The workflow has `pull-requests: write` permission
2. The `github-token` input is provided
3. The bot account has access to the repository

### Server authentication fails

Verify:
1. Server has `GITHUB_OIDC_ENABLED=true`
2. `GITHUB_OIDC_AUDIENCE` matches your server URL
3. Workflow has `id-token: write` permission

### No findings reported

This likely means no vulnerabilities were detected! Check:
1. The `minimum-severity` setting isn't filtering too aggressively
2. The server logs for scan results
3. The CLI output in action logs (set `ACTIONS_STEP_DEBUG=true`)

## Development

### Building

```bash
cd code-scan/action
npm run build
```

This uses `@vercel/ncc` to bundle the action into `dist/index.js`.

**Important**: The `dist/` directory is committed to the repository (not gitignored) because GitHub Actions require the compiled code to run the action.

### Testing Locally with Act

Test the action locally using [act](https://github.com/nektos/act):

```bash
# From action/ directory
npm run dev

# Or from code-scan/ directory
npm run dev:action
```

**Prerequisites:**

1. **Install act** (one-time setup):
   ```bash
   # macOS
   brew install act

   # Linux
   curl -s https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash

   # Windows
   choco install act-cli
   ```
   See [act installation docs](https://github.com/nektos/act#installation) for more options.

2. **Start the code-scan server**:
   ```bash
   cd ../server
   npm run dev
   ```

3. Act will connect to `http://host.docker.internal:2095` from within the Docker container

**What happens during local testing:**
- The CLI is automatically built from `../cli` (local source)
- Act uses a mock PR event (`.github/workflows/test-event.json`)
- The action detects `ACT=true` and uses the local CLI instead of `npx`
- The scan runs against your current working directory
- Comments are logged but not posted to GitHub (ACT mode detected)

**Note**: Full GitHub App integration testing (including comment posting) requires testing on a real repository. See [GitHub App Setup Guide](../server/docs/github-app-setup.md) for webhook configuration.

### Testing Changes

After making changes:
1. Run `npm run build` to rebuild the action
2. Commit the updated `dist/index.js` (required for GitHub Actions)
3. Test locally with `npm run test:local` or push to a test repository

## License

MIT
