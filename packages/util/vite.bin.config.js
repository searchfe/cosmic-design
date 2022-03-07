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
            entry: resolve(__dirname, './src/bin/index.ts'),
            name: 'cosmic-util',
            fileName: 'bin',
        },
        rollupOptions: {
            output: [{format: 'commonjs'}],
            external: [
                ...builtinModules.flatMap(p => [p, `node:${p}`]),
            ],
        },
        emptyOutDir: false,
    },
});
