/**
 * Shared authentication utilities
 * Reusable across HTTP requests and socket.io connections
 */
/**
 * Resolved auth credentials
 */
export interface AuthCredentials {
    apiKey?: string;
    oidcToken?: string;
    method?: 'cli_arg' | 'config_file' | 'promptfoo_auth' | 'github_oidc';
}
/**
 * Resolve authentication credentials using waterfall approach:
 * 1. API key from CLI argument or config file (passed as parameter)
 * 2. API key from promptfoo auth (cloudConfig)
 * 3. GitHub OIDC token (environment variable)
 *
 * @param apiKey Optional API key from CLI arg or config file
 * @returns Resolved auth credentials
 */
export declare function resolveAuthCredentials(apiKey?: string): AuthCredentials;
//# sourceMappingURL=auth.d.ts.map