/**
 * Git Metadata Extraction
 *
 * Extracts metadata about the current branch and commits.
 */
import type { GitMetadata } from '../types';
export declare class GitMetadataError extends Error {
    constructor(message: string);
}
/**
 * Extract git metadata for the comparison
 * @param repoPath Path to the git repository
 * @param baseBranch Base branch or commit
 * @param compareRef Compare branch or commit
 * @returns Git metadata object
 */
export declare function extractMetadata(repoPath: string, baseBranch: string, compareRef: string): Promise<GitMetadata>;
//# sourceMappingURL=metadata.d.ts.map