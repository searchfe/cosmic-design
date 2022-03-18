import type { StaticUtility } from '../ref/interfaces';
import type { Config } from './type';
import { genUtility } from './util';

export const effects = (config: Config) => {
    const opacity = config.theme?.opacity || {};
    // if (spacing) {
    //     ...genSpacing('p', 'padding', 'padding', spacing, 2);
    // }
    return {
        ...genUtility('opacity', 'opacity', 'opacity', opacity, 1),
    } as StaticUtility;
};
