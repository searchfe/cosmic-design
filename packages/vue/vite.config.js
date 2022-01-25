import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
import { cStyle } from './plugin/rollup-plugin-vue-cosmic';
import { resolve } from 'path';
export default defineConfig({
    root: './site',
    alias: {
        'cosmic-vue': resolve('./'),
    },
    plugins: [cStyle(), vue()],
});
