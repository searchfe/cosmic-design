import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import vue from '@vitejs/plugin-vue';
import { cosmicCollectionFactory } from './index.js';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';


export default defineConfig({
    build: {
        outDir: './dist',
        lib: {
            entry: 'index.ts',
            name: 'cosmic-icon',
            fileName: 'index',
            formats: ['es', 'cjs'],
        }
    },
    plugins: [
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
    server: {
        open: '/site/index.html',
    },
});
