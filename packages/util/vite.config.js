import { resolve } from 'path';
import { defineConfig } from 'vite';
import {builtinModules} from 'module';

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
            output: [{format: 'commonjs'}, {commonjs: 'esm'}],
            external: [
                ...builtinModules.flatMap(p => [p, `node:${p}`]),
            ],
        },
    },
});
