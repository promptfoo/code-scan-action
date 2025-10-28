/**
 * Shared types between CLI and Server
 */
export declare enum SeverityLevel {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical"
}
export interface ScanConfig {
    minimumSeverity: SeverityLevel;
    useFilesystem: boolean;
}
export interface GitMetadata {
    branch: string;
    baseBranch: string;
    commitMessages: string[];
    author: string;
    timestamp: string;
}
/**
 * Record of a single changed file from git diff
 */
export interface FileRecord {
    path: string;
    status: string;
    shaA: string | null;
    shaB: string | null;
    linesAdded?: number;
    linesRemoved?: number;
    beforeSizeBytes?: number;
    afterSizeBytes?: number;
    isText?: boolean;
    skipReason?: string;
    patch?: string;
}
export interface PullRequestContext {
    owner: string;
    repo: string;
    number: number;
    sha: string;
}
export interface ScanRequest {
    files: FileRecord[];
    metadata: GitMetadata;
    config: ScanConfig;
    sessionId?: string;
    pullRequest?: PullRequestContext;
}
/**
 * Results from each phase of the security scan workflow
 */
export interface PhaseResults {
    inventory: string;
    tracing: string;
    analysis: string;
    filtering: string;
    fixes: string;
    comments: string;
}
/**
 * Structured comment from parsed XML
 */
export interface Comment {
    file: string | null;
    line: number | null;
    body: string;
}
/**
 * Response from security scan
 */
export interface ScanResponse {
    success: boolean;
    phases: PhaseResults;
    comments: Comment[];
    batchCount?: number;
    error?: string;
}
/**
 * Individual vulnerability (for future structured parsing)
 */
export interface Vulnerability {
    file: string;
    line: number;
    vulnerabilityClass: string;
    severity: SeverityLevel;
    description: string;
    exploitScenario: string;
    recommendedFix: string;
}
//# sourceMappingURL=types.d.ts.map