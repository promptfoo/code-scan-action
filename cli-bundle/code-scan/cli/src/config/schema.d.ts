/**
 * Configuration Schema
 *
 * Zod schema for validating YAML configuration files.
 */
import { z } from 'zod';
import { SeverityLevel } from '../types';
export { SeverityLevel };
export declare const ConfigSchema: z.ZodObject<{
    minimumSeverity: z.ZodDefault<z.ZodNativeEnum<typeof SeverityLevel>>;
    useFilesystem: z.ZodDefault<z.ZodBoolean>;
    apiKey: z.ZodOptional<z.ZodString>;
    serverUrl: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    minimumSeverity: SeverityLevel;
    useFilesystem: boolean;
    apiKey?: string | undefined;
    serverUrl?: string | undefined;
}, {
    minimumSeverity?: SeverityLevel | undefined;
    useFilesystem?: boolean | undefined;
    apiKey?: string | undefined;
    serverUrl?: string | undefined;
}>;
export type Config = z.infer<typeof ConfigSchema>;
export declare const DEFAULT_CONFIG: Config;
//# sourceMappingURL=schema.d.ts.map