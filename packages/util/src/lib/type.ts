export interface Config {
    // darkMode?: false | 'class' | 'media',
    theme?: ThemeConfig;
    // variants: VariantConfigs;
    // plugins: Plugin[];
    filter?: FilterItem[]
}

export interface ThemeConfig {
    opacity?: SimpleConfig;
    spacing?: SimpleConfig;
    fontSize: FontSzieConfig;
    width: SimpleConfig;
    height: SimpleConfig;
    maxWidth: SimpleConfig,
    minWidth: SimpleConfig,
    maxHeight: SimpleConfig,
    minHeight: SimpleConfig,
    extend?: ThemeConfig;
}

export interface SimpleConfig {
    [index: string | number]: string;
}
export type FontConf = { fontSize: string };
export interface FontSzieConfig {
    [index: string]: string | string[] | [string, FontConf];
}

export type FilterItem = string | RegExp;
