import {staticUtilities} from '../static';
export function exportUtilities() {
    const utilities = staticUtilities();
    const rs: string[] = [];
    Object.keys(utilities).forEach(className => {
        const props: string[] = [];
        const utility = utilities[className].utility;
        Object.keys(utility).forEach(propName => {
            props.push(`    ${propName}: ${utility[propName]};`);
        });
        const item = `.${className}{\n${props.join('\n')}\n}`;
        rs.push(item);
    });
    return rs.join('\n\n');
}
