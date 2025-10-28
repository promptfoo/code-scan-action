/**
 * Configuration Loader
 *
 * Loads and validates configuration from YAML files.
 */
import { type Config } from './schema';
export type { Config };
export declare class ConfigLoadError extends Error {
    constructor(message: string);
}
/**
 * Load configuration from a YAML file
 * @param configPath Path to the configuration file
 * @returns Validated configuration object
 * @throws ConfigLoadError if file cannot be read or parsed
 */
export declare function loadConfig(configPath: string): Config;
/**
 * Load configuration with defaults
 * If no config path provided, returns default configuration
 */
export declare function loadConfigOrDefault(configPath?: string): Config;
//# sourceMappingURL=loader.d.ts.map