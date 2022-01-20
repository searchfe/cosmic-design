import { defineConfig } from 'vite';
import path from 'path';


export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'index.ts'),
            name: 'cosmic-design-san'
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['san']
        }
    },
    server: {
        open: '/site/index.html'
    }
})