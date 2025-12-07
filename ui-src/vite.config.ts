import { resolve } from 'node:path';
import { flux, preset } from '@basmilius/vite-preset';
import { defineConfig, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        preset({
            cssModules: {
                classNames: 'camel',
            },
            assetFileNames: '[name].[ext]',
            fileNames: 'actual',
            isLibrary: false
        }),
        flux(),
        vue()
    ] as Plugin[],
    build: {
        assetsDir: '',
        cssMinify: true,
        emptyOutDir: true,
        minify: true,
        outDir: '../assets/build',
        target: 'baseline-widely-available',
        lib: {
            cssFileName: 'listri-ui',
            entry: resolve(__dirname, 'src/main.ts'),
            formats: ['es'],
            fileName: 'listri-ui',
            name: 'ListriUI'
        },
        rollupOptions: {
            output: {
                generatedCode: {
                    symbols: false
                }
            }
        }
    },
    define: {
        'process.env.NODE_ENV': '"production"'
    },
    optimizeDeps: {
        include: ['pinia', 'vue']
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.runtime.esm-browser.prod.js'
        }
    }
});
