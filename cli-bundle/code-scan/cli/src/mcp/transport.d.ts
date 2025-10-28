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
    socket: Socket;
    private sessionId;
    private readBuffer;
    private wireIdSeq;
    private wireIdMap;
    constructor(mcpProcess: ChildProcess, socket: Socket, sessionId: string);
    /**
     * Start bridging MCP stdio with the provided socket
     */
    connect(): Promise<void>;
    /**
     * Start bridging MCP stdio and socket.io
     */
    private startBridging;
    /**
     * Stop bridging (socket lifecycle managed externally)
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