import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
import { cStyle } from './plugin/rollup-plugin-vue-cosmic';
import { resolve } from 'path';
import dts from 'vite-dts';
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
