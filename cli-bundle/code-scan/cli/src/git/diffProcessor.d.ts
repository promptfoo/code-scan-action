/**
 * Diff Processor
 *
 * Focused pipeline for processing git diffs:
 * 1. Discover changed files
 * 2. Filter denylist (early exit)
 * 3. Collect blob sizes and filter large files
 * 4. Determine text/binary status
 * 5. Generate per-file patches
 */
import type { FileRecord } from '../types';
export declare class DiffProcessorError extends Error {
    constructor(message: string);
}
/**
 * Process diff with focused pipeline
 */
export declare function processDiff(repoPath: string, base: string, compare?: string): Promise<FileRecord[]>;
//# sourceMappingURL=diffProcessor.d.ts.map