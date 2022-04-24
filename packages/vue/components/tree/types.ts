import type { tree } from 'cosmic-ui';

export interface TreeDataProps {
    label: string;
    id?: string;
    open?: string;
    children?: TreeDataProps[];
    readonly?: string;
    selected?: string;
    isGroup?: string;
}

export interface TreeProps {
    styles?: typeof tree,
    data?: TreeDataProps[], // all data in tee
    editable?: boolean,
    indent?: number,
    offset?: number,
    size?: string
}

export interface TreeNodeProps extends TreeProps{
    nodeData: TreeDataProps, // current data
}

export enum TreeNodeState {
    'leaf',
    'open',
    'close',
}

export interface TreeNodeEvent {
    id: string,
    state: TreeNodeState,
    data: TreeDataProps[],
    nodeData: TreeDataProps,
    event: Event,
}
export interface TreeChangeEvent {
    id: string,
    label: string,
    state: TreeNodeState,
    data: TreeDataProps[],
    nodeData: TreeDataProps,
    event: Event,
}

