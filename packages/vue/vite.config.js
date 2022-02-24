import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
import { cStyle } from './plugin/rollup-plugin-vue-cosmic';
import { resolve } from 'path';
import dts from 'vite-dts';
import { cosmicCollectionFactory } from '../icon/index';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';


export default defineConfig({
    root: './',
    resolve: {
        preserveSymlinks: false,
        alias: {
            'cosmic-vue': resolve('./'),
        },
    },
    plugins: [
        cStyle(),
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
        outDir: './dist',
        lib: {
            entry: resolve(__dirname, 'components/index.ts'),
            name: 'cosmic-vue',
            fileName: 'index',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
