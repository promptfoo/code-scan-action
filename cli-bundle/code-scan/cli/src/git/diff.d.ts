/**
 * Git Diff Extraction
 *
 * Extracts git diffs between the current branch and the base branch.
 */
import { type SimpleGit } from 'simple-git';
export declare class GitError extends Error {
    constructor(message: string);
}
/**
 * Validate that we're on a branch (not detached HEAD)
 * @param git Simple git instance
 * @throws GitError if not on a branch
 */
export declare function validateOnBranch(git: SimpleGit): Promise<string>;
/**
 * Extract git diff between current branch and base branch
 * @param repoPath Path to the git repository
 * @returns Git diff string
 * @throws GitError if diff extraction fails or if there are no diffs
 */
export declare function extractDiff(repoPath: string): Promise<{
    diff: string;
    baseBranch: string;
}>;
//# sourceMappingURL=diff.d.ts.map