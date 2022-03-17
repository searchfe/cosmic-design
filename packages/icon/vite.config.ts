import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import vue from '@vitejs/plugin-vue';
import { cosmicCollectionFactory } from './index.js';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import { replaceCodePlugin } from 'vite-plugin-replace';
import { readdirSync, statSync } from 'fs';
import { resolve, basename } from 'path';

export default defineConfig({
    build: {
        outDir: './dist',
        lib: {
            entry: 'index.ts',
            name: 'cosmic-icon',
            fileName: 'index',
            formats: ['es', 'cjs'],
        },
    },
    plugins: [
        replaceCodePlugin({
            replacements: [
                {
                    from: '__ICON_SHOW_CASES__',
                    to: iconShowCase(),
                },
            ],
        }),
        vue(),
        Icons({
            compiler: 'vue3',
            scale: 1,
            customCollections: {
                ...cosmicCollectionFactory(),
            },
        }),
        Components({
            dts: true,
            resolvers: [
                IconsResolver({
                    customCollections: ['cosmic'],
                }),
            ],
        }),
    ],
    server: {
        open: '/site/index.html',
    },
});

function iconShowCase() {
    const ROOT = resolve(__dirname, './svg');
    const list = readdirSync(ROOT);
    const rs: string[] = [];

    list.map(dir => resolve(ROOT, dir))
        .filter(dir => statSync(dir).isFile() && dir.match(/.svg$/))
        .map(dir => basename(dir).replace(/.svg$/, ''))
        .map(iconName => {
            rs.push(
                `<div>
                    <i-cosmic-${iconName} class="icon" />
                    <label>${iconName}</label>
                </div>`,
            );
        });
    return rs.join('\n');
}
