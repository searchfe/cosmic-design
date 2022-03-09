import type{ StaticUtility } from '../ref/interfaces';
type Filter = (propName: string, value: string | string[], className: string) => [string, string | string[]] | false;
export function utilitiesToCss(utilities: StaticUtility, filter = simpleFilter) {
    const rs: string[] = [];
    Object.keys(utilities).forEach(className => {
        const props: string[] = [];
        const utility = utilities[className].utility;
        Object.keys(utility).forEach(propName => {
            const rs = filter(propName, utility[propName], className);
            if (rs && rs[1].length) {
                props.push(`    ${rs[0]}: ${rs[1]};`);
            }
        });
        const item = `.${className}{\n${props.join('\n')}\n}`;
        rs.push(item);
    });
    return rs.join('\n\n');
}
const simpleFilter: Filter = (propName, value) => {
    if (propName.indexOf('-') == 0) return false;
    if (Array.isArray(value)) {
        value = value.filter(v => v.indexOf('-') !== 0);
    }
    return [propName, value];
};