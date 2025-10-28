/**
 * Socket.io MCP Transport Bridge (CLI Side)
 *
 * Bridges MCP stdio communication with socket.io:
 * - Reads from MCP stdout → emits to socket
 * - Listens to socket → writes to MCP stdin
 */
import type { ChildProcess } from 'node:child_process';
import { type Socket } from 'socket.io-client';
export declare class SocketIoMcpBridgeError extends Error {
    constructor(message: string);
}
/**
 * Bridge between MCP stdio and socket.io
 */
export declare class SocketIoMcpBridge {
    private mcpProcess;
    private serverUrl;
    private sessionId;
    private auth?;
    socket: Socket | null;
    private readBuffer;
    private isConnected;
    private wireIdSeq;
    private wireIdMap;
    constructor(mcpProcess: ChildProcess, serverUrl: string, sessionId: string, auth?: {
        apiKey?: string;
        oidcToken?: string;
    } | undefined);
    /**
     * Connect to server and start bridging
     */
    connect(): Promise<void>;
    /**
     * Start bridging MCP stdio and socket.io
     */
    private startBridging;
    /**
     * Disconnect socket and stop bridging
     */
    disconnect(): Promise<void>;
    /**
     * Get socket ID (if connected)
     */
    get socketId(): string | null;
    /**
     * Check if currently connected
     */
    get connected(): boolean;
}
//# sourceMappingURL=transport.d.ts.map