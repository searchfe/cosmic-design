import { resolve } from 'path';
import { defineConfig } from 'vite';
import {builtinModules} from 'module';
import dts from 'vite-dts';

export default defineConfig({
    root: './',
    resolve: {
        preserveSymlinks: false,
        alias: {
        },
    },
    plugins: [dts()],
    build: {
        outDir: './dist',
        lib: {
            entry: resolve(__dirname, './index.ts'),
            name: 'cosmic-ui',
            fileName: 'index',
        },
        rollupOptions: {
            // output: [{format: 'umd'}, {format: 'esm'}],
            external: [
                ...builtinModules.flatMap(p => [p, `node:${p}`]),
            ],
        },
        emptyOutDir: true,
    },
});
