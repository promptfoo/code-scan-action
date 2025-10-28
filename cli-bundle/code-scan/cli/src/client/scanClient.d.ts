/**
 * Scan Client
 *
 * HTTP client for communicating with the scan server.
 */
import type { ScanRequest, ScanResponse } from '../types';
export declare class ScanClientError extends Error {
    constructor(message: string);
}
/**
 * Send a scan request to the server
 * @param request Scan request with diff, metadata, and config
 * @param serverUrl Base URL of the scan server (default: https://api.promptfoo.dev)
 * @param apiKey Optional API key for authentication (CLI arg or config file)
 * @returns Scan response with markdown report
 */
export declare function sendScanRequest(request: ScanRequest, serverUrl?: string, apiKey?: string): Promise<ScanResponse>;
//# sourceMappingURL=scanClient.d.ts.map