import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
// import { cStyle } from './plugin/rollup-plugin-vue-cosmic';
import { resolve } from 'path';
import dts from 'vite-dts';
import { cosmicCollectionFactory } from 'cosmic-icon';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';


export default defineConfig({
    base: './',
    root: './',
    resolve: {
        preserveSymlinks: false,
        alias: {
            'cosmic-vue': resolve('./'),
            'cosmic-ui': resolve('../ui'),
            'cosmic-common': resolve('../common'),
        },
    },
    plugins: [
        dts(),
        vue(),
        Icons({
            compiler: 'vue3',
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
    build: {
        outDir: './docs',
        rollupOptions: {
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
