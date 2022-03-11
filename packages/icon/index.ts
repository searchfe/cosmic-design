import type { InlineCollection } from 'unplugin-icons';

import cosmicJSON from './json/cosmic.json';

interface Icon extends Record<string, unknown>{
    body: string;
}
interface JSONData extends Record<string, unknown> {
    icons: Record<string, Icon>
}

export function cosmicCollectionFactory(collectionName = 'cosmic') {
    // TODO: suport multi collections
    // TODO: normalize svg folder files
    const { icons = {} } = cosmicJSON as JSONData;
    const iconNames = Object.keys(icons);
    if (!iconNames) {
        throw new Error('no icon data');
    }
    const iconCollection = Object.keys(iconNames).reduce((prev, cur, index) => {
        const iconName = iconNames[index];
        prev[iconName] = `<svg viewBox="0 0 18 18" data-icon="fast-forward" width="1em" height="1em" fill="currentColor" aria-hidden="true">${icons[iconName].body}</svg>`;'' +  + '';
        return prev;
    }, {} as InlineCollection);
    return { [collectionName] : iconCollection };
}
