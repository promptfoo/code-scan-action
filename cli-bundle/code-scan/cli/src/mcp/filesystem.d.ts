/**
 * Filesystem MCP Server Management
 *
 * Spawns and manages the @modelcontextprotocol/server-filesystem child process.
 */
import { type ChildProcess } from 'node:child_process';
export declare class FilesystemMcpError extends Error {
    constructor(message: string);
}
/**
 * Start the filesystem MCP server as a child process
 * @param rootDir Absolute path to root directory for filesystem access
 * @returns Child process handle
 */
export declare function startFilesystemMcpServer(rootDir: string): ChildProcess;
/**
 * Stop the filesystem MCP server process
 * @param process Child process to terminate
 */
export declare function stopFilesystemMcpServer(process: ChildProcess): Promise<void>;
//# sourceMappingURL=filesystem.d.ts.map