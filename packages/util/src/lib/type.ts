export interface Config {
    // darkMode: 'class' | 'media',
    theme?: ThemeConfig;
}
export interface ThemeConfig {
    extend?: {
        spacing?: SpacingConfig;
    };
}
export interface SpacingConfig {
    [index: string | number]: string;
}
