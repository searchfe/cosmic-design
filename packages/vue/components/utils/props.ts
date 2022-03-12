import { isVNode, Fragment, Comment, Text } from 'vue';
import type { VNode } from 'vue';

export const flattenChildren = (children: unknown[] = [], filterEmpty = true) => {
    const temp = Array.isArray(children) ? children : [children];
    const res: unknown[] = [];
    temp.forEach(child => {
        if (Array.isArray(child)) {
            res.push(...flattenChildren(child, filterEmpty));
        } else if (child && child.type === Fragment) {
            res.push(...flattenChildren(child.children, filterEmpty));
        } else if (child && isVNode(child)) {
            if (filterEmpty && !isEmptyElement(child)) {
                res.push(child);
            } else if (!filterEmpty) {
                res.push(child);
            }
        } else if (isValid(child)) {
            res.push(child);
        }
    });
    return res;
};
export function isEmptyElement(c: VNode) {
    return (
        c &&
        (c.type === Comment ||
            (c.type === Fragment && c?.children?.length === 0) ||
            (c.type === Text && (c?.children as unknown as string)?.trim() === ''))
    );
}

const isValid = (value: any): boolean => {
    return value !== undefined && value !== null && value !== '';
};

export function isFragment(c) {
    return c.length === 1 && c[0].type === Fragment;
}
