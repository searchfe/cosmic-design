import type { Config } from './type';
const defaultConfig = require('cosmic-util/ui.config.js');
export function defineConfig(config: Config) {
    return {
        ...defaultConfig,
        ...config,
    } as Config;
}
