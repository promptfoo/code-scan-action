/**
 * Scan Command Implementation
 *
 * Main command that orchestrates the scanning process.
 */
export interface ScanOptions {
    config?: string;
    serverUrl?: string;
    apiKey?: string;
    useFilesystem?: boolean;
    base?: string;
    compare?: string;
    json?: boolean;
    githubPr?: string;
}
/**
 * Execute the scan command
 * @param repoPath Path to the repository to scan
 * @param options Command options
 */
export declare function executeScan(repoPath: string, options: ScanOptions): Promise<void>;
//# sourceMappingURL=scan.d.ts.map