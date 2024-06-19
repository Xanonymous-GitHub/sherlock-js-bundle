import { build, defineConfig, type BuildOptions } from 'vite'
import { resolve } from 'path'
import minify from 'vite-plugin-minify'

const additionalBuildSources = [
    resolve(__dirname, 'src/code.js'),
    resolve(__dirname, 'src/custom.scss')
]

const buildOptions = {
    minify: 'terser',
    sourcemap: false,
    assetsDir: "",
    emptyOutDir: false,
    chunkSizeWarningLimit: 700,
    terserOptions: {
        compress: true,
        keep_classnames: false,
        keep_fnames: false,
        ie8: false,
        format: {
            comments: false,
            shorthand: true,
            safari10: false,
        }
    },
    rollupOptions: {
        output: {
            format: 'cjs',
            assetFileNames: "[name].min.[ext]",
            entryFileNames: "[name].min.js",
            inlineDynamicImports: true,
            strict: true,
            validate: true
        }
    }
} satisfies BuildOptions

// This is for building the code.js file solely.
// If we add multiple inputs in `rollupOptions`, the generated script will not be minified.
// So building "html and its script" and `additionalBuildSources` separately is required.
additionalBuildSources.forEach(async (buildSource) => {
    await build({
        configFile: false,
        build: {
            ...buildOptions,
            rollupOptions: {
                input: buildSource,
                ...buildOptions.rollupOptions
            }
        },
        esbuild: {
            legalComments: "none",
        }
    })
})

export default defineConfig({
    plugins: [
        minify(),
    ],
    build: {
        ...buildOptions,
    },
    esbuild: {
        legalComments: "none",
    }
})
