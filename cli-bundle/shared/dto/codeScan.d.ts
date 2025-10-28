import { z } from 'zod';
export declare enum SeverityLevel {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical"
}
export declare enum DeploymentType {
    CLOUD = "cloud",
    ONPREM = "onprem"
}
export declare enum InstallationStatus {
    UNCONFIRMED = "unconfirmed",
    ACTIVE = "active",
    SUSPENDED = "suspended"
}
export declare enum CodeScanStatus {
    PENDING = "pending",
    RUNNING = "running",
    COMPLETED = "completed",
    FAILED = "failed"
}
export declare enum TriggeredBy {
    GITHUB_ACTION = "github_action",
    CLI = "cli",
    API = "api",
    UI = "ui"
}
export declare enum SetupType {
    AUTO = "auto",
    MANUAL = "manual"
}
export declare const FileRecordSchema: z.ZodObject<{
    path: z.ZodString;
    status: z.ZodString;
    shaA: z.ZodNullable<z.ZodString>;
    shaB: z.ZodNullable<z.ZodString>;
    linesAdded: z.ZodOptional<z.ZodNumber>;
    linesRemoved: z.ZodOptional<z.ZodNumber>;
    beforeSizeBytes: z.ZodOptional<z.ZodNumber>;
    afterSizeBytes: z.ZodOptional<z.ZodNumber>;
    isText: z.ZodOptional<z.ZodBoolean>;
    skipReason: z.ZodOptional<z.ZodString>;
    patch: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    path: string;
    status: string;
    shaA: string | null;
    shaB: string | null;
    linesAdded?: number | undefined;
    linesRemoved?: number | undefined;
    beforeSizeBytes?: number | undefined;
    afterSizeBytes?: number | undefined;
    isText?: boolean | undefined;
    skipReason?: string | undefined;
    patch?: string | undefined;
}, {
    path: string;
    status: string;
    shaA: string | null;
    shaB: string | null;
    linesAdded?: number | undefined;
    linesRemoved?: number | undefined;
    beforeSizeBytes?: number | undefined;
    afterSizeBytes?: number | undefined;
    isText?: boolean | undefined;
    skipReason?: string | undefined;
    patch?: string | undefined;
}>;
export declare const GitMetadataSchema: z.ZodObject<{
    branch: z.ZodString;
    baseBranch: z.ZodString;
    commitMessages: z.ZodArray<z.ZodString, "many">;
    author: z.ZodString;
    timestamp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    branch: string;
    baseBranch: string;
    commitMessages: string[];
    author: string;
    timestamp: string;
}, {
    branch: string;
    baseBranch: string;
    commitMessages: string[];
    author: string;
    timestamp: string;
}>;
export declare const ScanConfigSchema: z.ZodObject<{
    minimumSeverity: z.ZodNativeEnum<typeof SeverityLevel>;
    useFilesystem: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    minimumSeverity: SeverityLevel;
    useFilesystem: boolean;
}, {
    minimumSeverity: SeverityLevel;
    useFilesystem: boolean;
}>;
export declare const PullRequestContextSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    number: z.ZodNumber;
    sha: z.ZodString;
}, "strip", z.ZodTypeAny, {
    number: number;
    owner: string;
    repo: string;
    sha: string;
}, {
    number: number;
    owner: string;
    repo: string;
    sha: string;
}>;
export declare const ScanRequestSchema: z.ZodObject<{
    files: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        status: z.ZodString;
        shaA: z.ZodNullable<z.ZodString>;
        shaB: z.ZodNullable<z.ZodString>;
        linesAdded: z.ZodOptional<z.ZodNumber>;
        linesRemoved: z.ZodOptional<z.ZodNumber>;
        beforeSizeBytes: z.ZodOptional<z.ZodNumber>;
        afterSizeBytes: z.ZodOptional<z.ZodNumber>;
        isText: z.ZodOptional<z.ZodBoolean>;
        skipReason: z.ZodOptional<z.ZodString>;
        patch: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        status: string;
        shaA: string | null;
        shaB: string | null;
        linesAdded?: number | undefined;
        linesRemoved?: number | undefined;
        beforeSizeBytes?: number | undefined;
        afterSizeBytes?: number | undefined;
        isText?: boolean | undefined;
        skipReason?: string | undefined;
        patch?: string | undefined;
    }, {
        path: string;
        status: string;
        shaA: string | null;
        shaB: string | null;
        linesAdded?: number | undefined;
        linesRemoved?: number | undefined;
        beforeSizeBytes?: number | undefined;
        afterSizeBytes?: number | undefined;
        isText?: boolean | undefined;
        skipReason?: string | undefined;
        patch?: string | undefined;
    }>, "many">;
    metadata: z.ZodObject<{
        branch: z.ZodString;
        baseBranch: z.ZodString;
        commitMessages: z.ZodArray<z.ZodString, "many">;
        author: z.ZodString;
        timestamp: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        branch: string;
        baseBranch: string;
        commitMessages: string[];
        author: string;
        timestamp: string;
    }, {
        branch: string;
        baseBranch: string;
        commitMessages: string[];
        author: string;
        timestamp: string;
    }>;
    config: z.ZodObject<{
        minimumSeverity: z.ZodNativeEnum<typeof SeverityLevel>;
        useFilesystem: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        minimumSeverity: SeverityLevel;
        useFilesystem: boolean;
    }, {
        minimumSeverity: SeverityLevel;
        useFilesystem: boolean;
    }>;
    sessionId: z.ZodOptional<z.ZodString>;
    pullRequest: z.ZodOptional<z.ZodObject<{
        owner: z.ZodString;
        repo: z.ZodString;
        number: z.ZodNumber;
        sha: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        number: number;
        owner: string;
        repo: string;
        sha: string;
    }, {
        number: number;
        owner: string;
        repo: string;
        sha: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    files: {
        path: string;
        status: string;
        shaA: string | null;
        shaB: string | null;
        linesAdded?: number | undefined;
        linesRemoved?: number | undefined;
        beforeSizeBytes?: number | undefined;
        afterSizeBytes?: number | undefined;
        isText?: boolean | undefined;
        skipReason?: string | undefined;
        patch?: string | undefined;
    }[];
    metadata: {
        branch: string;
        baseBranch: string;
        commitMessages: string[];
        author: string;
        timestamp: string;
    };
    config: {
        minimumSeverity: SeverityLevel;
        useFilesystem: boolean;
    };
    sessionId?: string | undefined;
    pullRequest?: {
        number: number;
        owner: string;
        repo: string;
        sha: string;
    } | undefined;
}, {
    files: {
        path: string;
        status: string;
        shaA: string | null;
        shaB: string | null;
        linesAdded?: number | undefined;
        linesRemoved?: number | undefined;
        beforeSizeBytes?: number | undefined;
        afterSizeBytes?: number | undefined;
        isText?: boolean | undefined;
        skipReason?: string | undefined;
        patch?: string | undefined;
    }[];
    metadata: {
        branch: string;
        baseBranch: string;
        commitMessages: string[];
        author: string;
        timestamp: string;
    };
    config: {
        minimumSeverity: SeverityLevel;
        useFilesystem: boolean;
    };
    sessionId?: string | undefined;
    pullRequest?: {
        number: number;
        owner: string;
        repo: string;
        sha: string;
    } | undefined;
}>;
export declare const CommentSchema: z.ZodObject<{
    file: z.ZodNullable<z.ZodString>;
    line: z.ZodNullable<z.ZodNumber>;
    body: z.ZodString;
}, "strip", z.ZodTypeAny, {
    file: string | null;
    line: number | null;
    body: string;
}, {
    file: string | null;
    line: number | null;
    body: string;
}>;
export declare const PhaseResultsSchema: z.ZodObject<{
    inventory: z.ZodString;
    tracing: z.ZodString;
    analysis: z.ZodString;
    filtering: z.ZodString;
    fixes: z.ZodString;
    comments: z.ZodString;
}, "strip", z.ZodTypeAny, {
    inventory: string;
    tracing: string;
    analysis: string;
    filtering: string;
    fixes: string;
    comments: string;
}, {
    inventory: string;
    tracing: string;
    analysis: string;
    filtering: string;
    fixes: string;
    comments: string;
}>;
export declare const ScanResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    phases: z.ZodObject<{
        inventory: z.ZodString;
        tracing: z.ZodString;
        analysis: z.ZodString;
        filtering: z.ZodString;
        fixes: z.ZodString;
        comments: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        inventory: string;
        tracing: string;
        analysis: string;
        filtering: string;
        fixes: string;
        comments: string;
    }, {
        inventory: string;
        tracing: string;
        analysis: string;
        filtering: string;
        fixes: string;
        comments: string;
    }>;
    comments: z.ZodArray<z.ZodObject<{
        file: z.ZodNullable<z.ZodString>;
        line: z.ZodNullable<z.ZodNumber>;
        body: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        file: string | null;
        line: number | null;
        body: string;
    }, {
        file: string | null;
        line: number | null;
        body: string;
    }>, "many">;
    commentsPosted: z.ZodOptional<z.ZodBoolean>;
    batchCount: z.ZodOptional<z.ZodNumber>;
    error: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    comments: {
        file: string | null;
        line: number | null;
        body: string;
    }[];
    success: boolean;
    phases: {
        inventory: string;
        tracing: string;
        analysis: string;
        filtering: string;
        fixes: string;
        comments: string;
    };
    commentsPosted?: boolean | undefined;
    batchCount?: number | undefined;
    error?: string | undefined;
}, {
    comments: {
        file: string | null;
        line: number | null;
        body: string;
    }[];
    success: boolean;
    phases: {
        inventory: string;
        tracing: string;
        analysis: string;
        filtering: string;
        fixes: string;
        comments: string;
    };
    commentsPosted?: boolean | undefined;
    batchCount?: number | undefined;
    error?: string | undefined;
}>;
export declare const SetupPrResultsSchema: z.ZodObject<{
    created: z.ZodArray<z.ZodObject<{
        repo: z.ZodString;
        prUrl: z.ZodString;
        prNumber: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        repo: string;
        prUrl: string;
        prNumber: number;
    }, {
        repo: string;
        prUrl: string;
        prNumber: number;
    }>, "many">;
    failed: z.ZodArray<z.ZodObject<{
        repo: z.ZodString;
        error: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        repo: string;
        error: string;
    }, {
        repo: string;
        error: string;
    }>, "many">;
    skipped: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    failed: {
        repo: string;
        error: string;
    }[];
    created: {
        repo: string;
        prUrl: string;
        prNumber: number;
    }[];
    skipped: string[];
}, {
    failed: {
        repo: string;
        error: string;
    }[];
    created: {
        repo: string;
        prUrl: string;
        prNumber: number;
    }[];
    skipped: string[];
}>;
export declare const CodeScanInstallationSchema: z.ZodObject<{
    id: z.ZodString;
    installationId: z.ZodNumber;
    githubOrgId: z.ZodNumber;
    githubOrgName: z.ZodString;
    repositories: z.ZodArray<z.ZodString, "many">;
    deploymentType: z.ZodNativeEnum<typeof DeploymentType>;
    serverUrl: z.ZodNullable<z.ZodString>;
    setupType: z.ZodNullable<z.ZodNativeEnum<typeof SetupType>>;
    status: z.ZodNativeEnum<typeof InstallationStatus>;
    organizationId: z.ZodNullable<z.ZodString>;
    installerGithubUsername: z.ZodNullable<z.ZodString>;
    installerGithubId: z.ZodNullable<z.ZodNumber>;
    confirmedByEmail: z.ZodNullable<z.ZodString>;
    confirmedByUserId: z.ZodNullable<z.ZodString>;
    setupPrsInProgress: z.ZodBoolean;
    setupPrsCreated: z.ZodBoolean;
    setupPrResults: z.ZodNullable<z.ZodObject<{
        created: z.ZodArray<z.ZodObject<{
            repo: z.ZodString;
            prUrl: z.ZodString;
            prNumber: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            repo: string;
            prUrl: string;
            prNumber: number;
        }, {
            repo: string;
            prUrl: string;
            prNumber: number;
        }>, "many">;
        failed: z.ZodArray<z.ZodObject<{
            repo: z.ZodString;
            error: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            repo: string;
            error: string;
        }, {
            repo: string;
            error: string;
        }>, "many">;
        skipped: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        failed: {
            repo: string;
            error: string;
        }[];
        created: {
            repo: string;
            prUrl: string;
            prNumber: number;
        }[];
        skipped: string[];
    }, {
        failed: {
            repo: string;
            error: string;
        }[];
        created: {
            repo: string;
            prUrl: string;
            prNumber: number;
        }[];
        skipped: string[];
    }>>;
    installedAt: z.ZodDate;
    confirmedAt: z.ZodNullable<z.ZodDate>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    serverUrl: string | null;
    status: InstallationStatus;
    id: string;
    installationId: number;
    githubOrgId: number;
    githubOrgName: string;
    repositories: string[];
    deploymentType: DeploymentType;
    setupType: SetupType | null;
    organizationId: string | null;
    installerGithubUsername: string | null;
    installerGithubId: number | null;
    confirmedByEmail: string | null;
    confirmedByUserId: string | null;
    setupPrsInProgress: boolean;
    setupPrsCreated: boolean;
    setupPrResults: {
        failed: {
            repo: string;
            error: string;
        }[];
        created: {
            repo: string;
            prUrl: string;
            prNumber: number;
        }[];
        skipped: string[];
    } | null;
    installedAt: Date;
    confirmedAt: Date | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}, {
    serverUrl: string | null;
    status: InstallationStatus;
    id: string;
    installationId: number;
    githubOrgId: number;
    githubOrgName: string;
    repositories: string[];
    deploymentType: DeploymentType;
    setupType: SetupType | null;
    organizationId: string | null;
    installerGithubUsername: string | null;
    installerGithubId: number | null;
    confirmedByEmail: string | null;
    confirmedByUserId: string | null;
    setupPrsInProgress: boolean;
    setupPrsCreated: boolean;
    setupPrResults: {
        failed: {
            repo: string;
            error: string;
        }[];
        created: {
            repo: string;
            prUrl: string;
            prNumber: number;
        }[];
        skipped: string[];
    } | null;
    installedAt: Date;
    confirmedAt: Date | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const CodeScanSchema: z.ZodObject<{
    id: z.ZodString;
    codeScanInstallationId: z.ZodNullable<z.ZodString>;
    organizationId: z.ZodString;
    userId: z.ZodNullable<z.ZodString>;
    repositoryFullName: z.ZodString;
    commitSha: z.ZodString;
    pullRequestNumber: z.ZodNullable<z.ZodNumber>;
    status: z.ZodNativeEnum<typeof CodeScanStatus>;
    triggeredBy: z.ZodNativeEnum<typeof TriggeredBy>;
    issuesFoundCount: z.ZodNullable<z.ZodNumber>;
    resultsSummary: z.ZodAny;
    errorMessage: z.ZodNullable<z.ZodString>;
    startedAt: z.ZodDate;
    completedAt: z.ZodNullable<z.ZodDate>;
    durationMs: z.ZodNullable<z.ZodNumber>;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    status: CodeScanStatus;
    id: string;
    organizationId: string;
    createdAt: Date;
    codeScanInstallationId: string | null;
    userId: string | null;
    repositoryFullName: string;
    commitSha: string;
    pullRequestNumber: number | null;
    triggeredBy: TriggeredBy;
    issuesFoundCount: number | null;
    errorMessage: string | null;
    startedAt: Date;
    completedAt: Date | null;
    durationMs: number | null;
    resultsSummary?: any;
}, {
    status: CodeScanStatus;
    id: string;
    organizationId: string;
    createdAt: Date;
    codeScanInstallationId: string | null;
    userId: string | null;
    repositoryFullName: string;
    commitSha: string;
    pullRequestNumber: number | null;
    triggeredBy: TriggeredBy;
    issuesFoundCount: number | null;
    errorMessage: string | null;
    startedAt: Date;
    completedAt: Date | null;
    durationMs: number | null;
    resultsSummary?: any;
}>;
export declare const ConfirmInstallationRequestSchema: z.ZodObject<{
    installationId: z.ZodNumber;
    organizationId: z.ZodString;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    installationId: number;
    organizationId: string;
    email: string;
}, {
    installationId: number;
    organizationId: string;
    email: string;
}>;
export declare const OnPremSetupRequestSchema: z.ZodObject<{
    installationId: z.ZodNumber;
    serverUrl: z.ZodString;
    setupType: z.ZodNativeEnum<typeof SetupType>;
}, "strip", z.ZodTypeAny, {
    serverUrl: string;
    installationId: number;
    setupType: SetupType;
}, {
    serverUrl: string;
    installationId: number;
    setupType: SetupType;
}>;
export declare const CreateSetupPRsRequestSchema: z.ZodObject<{
    installationId: z.ZodNumber;
    repositories: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    installationId: number;
    repositories: string[];
}, {
    installationId: number;
    repositories: string[];
}>;
export declare const SetInstallationEmailRequestSchema: z.ZodObject<{
    installationId: z.ZodNumber;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    installationId: number;
    email: string;
}, {
    installationId: number;
    email: string;
}>;
export declare const CodeScanInstallationResponseSchema: z.ZodObject<Omit<{
    id: z.ZodString;
    installationId: z.ZodNumber;
    githubOrgId: z.ZodNumber;
    githubOrgName: z.ZodString;
    repositories: z.ZodArray<z.ZodString, "many">;
    deploymentType: z.ZodNativeEnum<typeof DeploymentType>;
    serverUrl: z.ZodNullable<z.ZodString>;
    setupType: z.ZodNullable<z.ZodNativeEnum<typeof SetupType>>;
    status: z.ZodNativeEnum<typeof InstallationStatus>;
    organizationId: z.ZodNullable<z.ZodString>;
    installerGithubUsername: z.ZodNullable<z.ZodString>;
    installerGithubId: z.ZodNullable<z.ZodNumber>;
    confirmedByEmail: z.ZodNullable<z.ZodString>;
    confirmedByUserId: z.ZodNullable<z.ZodString>;
    setupPrsInProgress: z.ZodBoolean;
    setupPrsCreated: z.ZodBoolean;
    setupPrResults: z.ZodNullable<z.ZodObject<{
        created: z.ZodArray<z.ZodObject<{
            repo: z.ZodString;
            prUrl: z.ZodString;
            prNumber: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            repo: string;
            prUrl: string;
            prNumber: number;
        }, {
            repo: string;
            prUrl: string;
            prNumber: number;
        }>, "many">;
        failed: z.ZodArray<z.ZodObject<{
            repo: z.ZodString;
            error: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            repo: string;
            error: string;
        }, {
            repo: string;
            error: string;
        }>, "many">;
        skipped: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        failed: {
            repo: string;
            error: string;
        }[];
        created: {
            repo: string;
            prUrl: string;
            prNumber: number;
        }[];
        skipped: string[];
    }, {
        failed: {
            repo: string;
            error: string;
        }[];
        created: {
            repo: string;
            prUrl: string;
            prNumber: number;
        }[];
        skipped: string[];
    }>>;
} & {
    installedAt: z.ZodString;
    confirmedAt: z.ZodNullable<z.ZodString>;
    deletedAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    shouldRedirectToLogin: z.ZodOptional<z.ZodBoolean>;
    message: z.ZodOptional<z.ZodString>;
}, "setupPrResults"> & {
    setupPrResults: z.ZodNullable<z.ZodObject<{
        created: z.ZodArray<z.ZodObject<{
            repo: z.ZodString;
            prUrl: z.ZodString;
            prNumber: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            repo: string;
            prUrl: string;
            prNumber: number;
        }, {
            repo: string;
            prUrl: string;
            prNumber: number;
        }>, "many">;
        failed: z.ZodArray<z.ZodObject<{
            repo: z.ZodString;
            error: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            repo: string;
            error: string;
        }, {
            repo: string;
            error: string;
        }>, "many">;
        skipped: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        failed: {
            repo: string;
            error: string;
        }[];
        created: {
            repo: string;
            prUrl: string;
            prNumber: number;
        }[];
        skipped: string[];
    }, {
        failed: {
            repo: string;
            error: string;
        }[];
        created: {
            repo: string;
            prUrl: string;
            prNumber: number;
        }[];
        skipped: string[];
    }>>;
}, "strip", z.ZodTypeAny, {
    serverUrl: string | null;
    status: InstallationStatus;
    id: string;
    installationId: number;
    githubOrgId: number;
    githubOrgName: string;
    repositories: string[];
    deploymentType: DeploymentType;
    setupType: SetupType | null;
    organizationId: string | null;
    installerGithubUsername: string | null;
    installerGithubId: number | null;
    confirmedByEmail: string | null;
    confirmedByUserId: string | null;
    setupPrsInProgress: boolean;
    setupPrsCreated: boolean;
    setupPrResults: {
        failed: {
            repo: string;
            error: string;
        }[];
        created: {
            repo: string;
            prUrl: string;
            prNumber: number;
        }[];
        skipped: string[];
    } | null;
    installedAt: string;
    confirmedAt: string | null;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
    message?: string | undefined;
    shouldRedirectToLogin?: boolean | undefined;
}, {
    serverUrl: string | null;
    status: InstallationStatus;
    id: string;
    installationId: number;
    githubOrgId: number;
    githubOrgName: string;
    repositories: string[];
    deploymentType: DeploymentType;
    setupType: SetupType | null;
    organizationId: string | null;
    installerGithubUsername: string | null;
    installerGithubId: number | null;
    confirmedByEmail: string | null;
    confirmedByUserId: string | null;
    setupPrsInProgress: boolean;
    setupPrsCreated: boolean;
    setupPrResults: {
        failed: {
            repo: string;
            error: string;
        }[];
        created: {
            repo: string;
            prUrl: string;
            prNumber: number;
        }[];
        skipped: string[];
    } | null;
    installedAt: string;
    confirmedAt: string | null;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
    message?: string | undefined;
    shouldRedirectToLogin?: boolean | undefined;
}>;
export declare const CodeScanResponseSchema: z.ZodObject<{
    id: z.ZodString;
    codeScanInstallationId: z.ZodNullable<z.ZodString>;
    organizationId: z.ZodString;
    userId: z.ZodNullable<z.ZodString>;
    repositoryFullName: z.ZodString;
    commitSha: z.ZodString;
    pullRequestNumber: z.ZodNullable<z.ZodNumber>;
    status: z.ZodNativeEnum<typeof CodeScanStatus>;
    triggeredBy: z.ZodNativeEnum<typeof TriggeredBy>;
    issuesFoundCount: z.ZodNullable<z.ZodNumber>;
    resultsSummary: z.ZodAny;
    errorMessage: z.ZodNullable<z.ZodString>;
    durationMs: z.ZodNullable<z.ZodNumber>;
} & {
    startedAt: z.ZodString;
    completedAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: CodeScanStatus;
    id: string;
    organizationId: string;
    createdAt: string;
    codeScanInstallationId: string | null;
    userId: string | null;
    repositoryFullName: string;
    commitSha: string;
    pullRequestNumber: number | null;
    triggeredBy: TriggeredBy;
    issuesFoundCount: number | null;
    errorMessage: string | null;
    startedAt: string;
    completedAt: string | null;
    durationMs: number | null;
    resultsSummary?: any;
}, {
    status: CodeScanStatus;
    id: string;
    organizationId: string;
    createdAt: string;
    codeScanInstallationId: string | null;
    userId: string | null;
    repositoryFullName: string;
    commitSha: string;
    pullRequestNumber: number | null;
    triggeredBy: TriggeredBy;
    issuesFoundCount: number | null;
    errorMessage: string | null;
    startedAt: string;
    completedAt: string | null;
    durationMs: number | null;
    resultsSummary?: any;
}>;
export declare const CodeScanListResponseSchema: z.ZodObject<{
    scans: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        codeScanInstallationId: z.ZodNullable<z.ZodString>;
        organizationId: z.ZodString;
        userId: z.ZodNullable<z.ZodString>;
        repositoryFullName: z.ZodString;
        commitSha: z.ZodString;
        pullRequestNumber: z.ZodNullable<z.ZodNumber>;
        status: z.ZodNativeEnum<typeof CodeScanStatus>;
        triggeredBy: z.ZodNativeEnum<typeof TriggeredBy>;
        issuesFoundCount: z.ZodNullable<z.ZodNumber>;
        resultsSummary: z.ZodAny;
        errorMessage: z.ZodNullable<z.ZodString>;
        durationMs: z.ZodNullable<z.ZodNumber>;
    } & {
        startedAt: z.ZodString;
        completedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: CodeScanStatus;
        id: string;
        organizationId: string;
        createdAt: string;
        codeScanInstallationId: string | null;
        userId: string | null;
        repositoryFullName: string;
        commitSha: string;
        pullRequestNumber: number | null;
        triggeredBy: TriggeredBy;
        issuesFoundCount: number | null;
        errorMessage: string | null;
        startedAt: string;
        completedAt: string | null;
        durationMs: number | null;
        resultsSummary?: any;
    }, {
        status: CodeScanStatus;
        id: string;
        organizationId: string;
        createdAt: string;
        codeScanInstallationId: string | null;
        userId: string | null;
        repositoryFullName: string;
        commitSha: string;
        pullRequestNumber: number | null;
        triggeredBy: TriggeredBy;
        issuesFoundCount: number | null;
        errorMessage: string | null;
        startedAt: string;
        completedAt: string | null;
        durationMs: number | null;
        resultsSummary?: any;
    }>, "many">;
    total: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    scans: {
        status: CodeScanStatus;
        id: string;
        organizationId: string;
        createdAt: string;
        codeScanInstallationId: string | null;
        userId: string | null;
        repositoryFullName: string;
        commitSha: string;
        pullRequestNumber: number | null;
        triggeredBy: TriggeredBy;
        issuesFoundCount: number | null;
        errorMessage: string | null;
        startedAt: string;
        completedAt: string | null;
        durationMs: number | null;
        resultsSummary?: any;
    }[];
    total: number;
}, {
    scans: {
        status: CodeScanStatus;
        id: string;
        organizationId: string;
        createdAt: string;
        codeScanInstallationId: string | null;
        userId: string | null;
        repositoryFullName: string;
        commitSha: string;
        pullRequestNumber: number | null;
        triggeredBy: TriggeredBy;
        issuesFoundCount: number | null;
        errorMessage: string | null;
        startedAt: string;
        completedAt: string | null;
        durationMs: number | null;
        resultsSummary?: any;
    }[];
    total: number;
}>;
export declare const GitHubInstallationWebhookSchema: z.ZodObject<{
    action: z.ZodEnum<["created", "deleted", "suspend", "unsuspend", "new_permissions_accepted"]>;
    installation: z.ZodObject<{
        id: z.ZodNumber;
        account: z.ZodObject<{
            login: z.ZodString;
            id: z.ZodNumber;
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: number;
            login: string;
        }, {
            type: string;
            id: number;
            login: string;
        }>;
        repository_selection: z.ZodOptional<z.ZodString>;
        created_at: z.ZodOptional<z.ZodString>;
        updated_at: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        account: {
            type: string;
            id: number;
            login: string;
        };
        repository_selection?: string | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
    }, {
        id: number;
        account: {
            type: string;
            id: number;
            login: string;
        };
        repository_selection?: string | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
    }>;
    repositories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        full_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        full_name: string;
    }, {
        id: number;
        name: string;
        full_name: string;
    }>, "many">>;
    sender: z.ZodObject<{
        login: z.ZodString;
        id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
        login: string;
    }, {
        id: number;
        login: string;
    }>;
}, "strip", z.ZodTypeAny, {
    action: "created" | "deleted" | "suspend" | "unsuspend" | "new_permissions_accepted";
    installation: {
        id: number;
        account: {
            type: string;
            id: number;
            login: string;
        };
        repository_selection?: string | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
    };
    sender: {
        id: number;
        login: string;
    };
    repositories?: {
        id: number;
        name: string;
        full_name: string;
    }[] | undefined;
}, {
    action: "created" | "deleted" | "suspend" | "unsuspend" | "new_permissions_accepted";
    installation: {
        id: number;
        account: {
            type: string;
            id: number;
            login: string;
        };
        repository_selection?: string | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
    };
    sender: {
        id: number;
        login: string;
    };
    repositories?: {
        id: number;
        name: string;
        full_name: string;
    }[] | undefined;
}>;
export declare const GitHubInstallationRepositoriesWebhookSchema: z.ZodObject<{
    action: z.ZodEnum<["added", "removed"]>;
    installation: z.ZodObject<{
        id: z.ZodNumber;
        account: z.ZodObject<{
            login: z.ZodString;
            id: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: number;
            login: string;
        }, {
            id: number;
            login: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        account: {
            id: number;
            login: string;
        };
    }, {
        id: number;
        account: {
            id: number;
            login: string;
        };
    }>;
    repositories_added: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        full_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        full_name: string;
    }, {
        id: number;
        name: string;
        full_name: string;
    }>, "many">>;
    repositories_removed: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        full_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        full_name: string;
    }, {
        id: number;
        name: string;
        full_name: string;
    }>, "many">>;
    sender: z.ZodObject<{
        login: z.ZodString;
        id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
        login: string;
    }, {
        id: number;
        login: string;
    }>;
}, "strip", z.ZodTypeAny, {
    action: "added" | "removed";
    installation: {
        id: number;
        account: {
            id: number;
            login: string;
        };
    };
    sender: {
        id: number;
        login: string;
    };
    repositories_added?: {
        id: number;
        name: string;
        full_name: string;
    }[] | undefined;
    repositories_removed?: {
        id: number;
        name: string;
        full_name: string;
    }[] | undefined;
}, {
    action: "added" | "removed";
    installation: {
        id: number;
        account: {
            id: number;
            login: string;
        };
    };
    sender: {
        id: number;
        login: string;
    };
    repositories_added?: {
        id: number;
        name: string;
        full_name: string;
    }[] | undefined;
    repositories_removed?: {
        id: number;
        name: string;
        full_name: string;
    }[] | undefined;
}>;
export type FileRecord = z.infer<typeof FileRecordSchema>;
export type GitMetadata = z.infer<typeof GitMetadataSchema>;
export type ScanConfig = z.infer<typeof ScanConfigSchema>;
export type PullRequestContext = z.infer<typeof PullRequestContextSchema>;
export type ScanRequest = z.infer<typeof ScanRequestSchema>;
export type Comment = z.infer<typeof CommentSchema>;
export type PhaseResults = z.infer<typeof PhaseResultsSchema>;
export type ScanResponse = z.infer<typeof ScanResponseSchema>;
export type SetupPrResults = z.infer<typeof SetupPrResultsSchema>;
export type CodeScanInstallation = z.infer<typeof CodeScanInstallationSchema>;
export type CodeScan = z.infer<typeof CodeScanSchema>;
export type ConfirmInstallationRequest = z.infer<typeof ConfirmInstallationRequestSchema>;
export type OnPremSetupRequest = z.infer<typeof OnPremSetupRequestSchema>;
export type CreateSetupPRsRequest = z.infer<typeof CreateSetupPRsRequestSchema>;
export type SetInstallationEmailRequest = z.infer<typeof SetInstallationEmailRequestSchema>;
export type CodeScanInstallationResponseDTO = z.infer<typeof CodeScanInstallationResponseSchema>;
export type CodeScanResponseDTO = z.infer<typeof CodeScanResponseSchema>;
export type CodeScanListResponseDTO = z.infer<typeof CodeScanListResponseSchema>;
export type GitHubInstallationWebhook = z.infer<typeof GitHubInstallationWebhookSchema>;
export type GitHubInstallationRepositoriesWebhook = z.infer<typeof GitHubInstallationRepositoriesWebhookSchema>;
//# sourceMappingURL=codeScan.d.ts.map