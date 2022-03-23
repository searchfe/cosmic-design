import type { tree } from 'cosmic-ui';
export interface TreeNodeOption  {
    title: string;
    styles?: typeof tree,
    indentStep?: string | number;
    extra?: string;
    // eslint-disable-next-line vue/no-reserved-props
    key?: string;
    children?: TreeNodeOption[];
    editable?: boolean,
}

export interface TreeNodeEvent {
    expanded: boolean,
    key: string,
    isLeaf: boolean,
    event: Event,
}
