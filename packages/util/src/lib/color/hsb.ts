
interface ColorWheelConfig  {
    [index: string]: string,
}
type Rule = [string, string, string, string];
export const defaultColorWheelConfig = {
    
    'red': '[0, 15), (315, 360]',
    'orange': '[15, 30]',
    'yellow': '(30, 60]',
    'green': '(60, 165]',
    'cyan': '(165, 195]',
    'blue': '(195, 255]',
    'purple': '(255, 315]',
};
export function getNameByHue(hue: number, config: ColorWheelConfig = defaultColorWheelConfig ) {
    Object.keys(config).forEach(name => {
        getRules(config[name]).forEach(rule => {
            // if (rule[0] == 1)
        });
    });
}
function getRules(rulesString: string) {
    const arrs = rulesString.replace(/\s/g, '').split(','); // ['[0,15]', '(315,360]']
    const rs: Rule[] = [];
    arrs.forEach(arr => {
        if(arr.match(/^([[(])(\d+),(\d+)([\])])$/)) {
            rs.push([RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$4]);
        }
    });
    return rs;
}
// function gt(num0: number, num1: number, include: boolean){

// }
// hues 色相
// saturation 饱和度
// brightness 明度