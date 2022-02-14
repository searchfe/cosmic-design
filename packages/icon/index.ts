import type { InlineCollection } from 'unplugin-icons';

import cosmicJSON from './json/cosmic.json';

interface Icon extends Record<string, unknown>{
    body: string;
}
interface JSONData extends Record<string, unknown> {
    icons: Record<string, Icon>
}

export function cosmicCollectionFactory(collectionName = 'cosmic') {
    //TODO: suport multi collections
    const { icons = {} } = cosmicJSON as JSONData;
    const iconNames = Object.keys(icons);
    if (!iconNames) {
        throw new Error('no icon data');
    }
    const iconCollection = Object.keys(iconNames).reduce((prev, cur, index) => {
        const iconName = iconNames[index];
        prev[iconName] = `<svg>${icons[iconName].body}</svg>`;'' +  + '';
        return prev;
    }, {} as InlineCollection);
    return { [collectionName] : iconCollection };
}