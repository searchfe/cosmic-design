import { defineConfig } from 'vite';
import path from 'path';
import { cStyle } from './plugin/vanilla/rollup-plugin-san-cosmic';


export default defineConfig({
    root: './',
    build: {
        lib: {
            entry: path.resolve(__dirname, 'index.ts'),
            name: 'cosmic-san',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['san', 'cosmic-ui'],
        },
    },
    plugins: [
        cStyle(),
    ],
    server: {
        open: '/site/index.html',
    },
});