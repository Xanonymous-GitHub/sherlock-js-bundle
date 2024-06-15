import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.js'),
            name: "sherlock-lib",
            formats: ['umd']
        },
        minify: "esbuild",
        sourcemap: false,
        rollupOptions: {
            output: {
                esModule: true,
                assetFileNames: "[name].min.js",
                format: "esm",
            }
        }
    },
    esbuild: {
        legalComments: "none",
    }
})
