export interface TreeNodeOption  {
    title: string;
    indentStep?: string | number;
    treeIcon?: string;
    leafIcon?: string;
    extra?: string;
    // eslint-disable-next-line vue/no-reserved-props
    key?: string;
    children?: TreeNodeOption[];
}
