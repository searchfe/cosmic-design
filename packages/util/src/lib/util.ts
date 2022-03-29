import type { Config, SimpleConfig } from './type';
import type { StaticUtility } from '../ref/interfaces';

const defaultConfig = require('cosmic-util/ui.config.js');

export function defineConfig(config: Config) {
    const newConfig = { ...defaultConfig, ...config };
    newConfig.theme = {
        ...defaultConfig.theme,
        ...config.theme,
    };
    if (config.theme?.extend) {
        Object.keys(config.theme?.extend).map((key: string) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const conf = (config.theme?.extend as any)[key] as SimpleConfig;
            newConfig.theme[key] = Object.assign(newConfig.theme[key] || {}, conf);
        });
        delete newConfig.theme?.extend;
    }
    return newConfig as Config;
}

export function genUtility(prefix: string, props: string | string[], groupName: string, conf: SimpleConfig, idx = 1) {
    const rs: StaticUtility = {};
    Object.keys(conf).forEach(key => {
        const val = conf[key];
        const p = Array.isArray(props) ? props : [props];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const utility: any = {};
        for (const prop of p) {
            utility[prop] = val;
        }
        rs[`${prefix}-${key}`] = {
            utility,
            meta: { group: groupName, order: idx },
        };
        idx++;
    });
    return rs;
}
