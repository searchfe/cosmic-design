import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: './',
    resolve: {
        preserveSymlinks: false,
        alias: {
        },
    },
    plugins: [],
    build: {
        outDir: './dist',
        lib: {
            entry: resolve(__dirname, './src/index.ts'),
            name: 'cosmic-util',
            fileName: 'index',
        },
        rollupOptions: {
            external: [],
            output: {},
        },
    },
});
