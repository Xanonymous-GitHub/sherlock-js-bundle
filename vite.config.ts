import { build, defineConfig, type BuildOptions } from 'vite'
import { resolve } from 'path'

const additionalBuildSources = [
    resolve(__dirname, 'src/code.js'),
    resolve(__dirname, 'src/custom.scss')
]

const buildOptions = {
    minify: "esbuild",
    sourcemap: false,
    assetsDir: "",
    emptyOutDir: false,
    rollupOptions: {
        output: {
            preserveModules: false,
            format: "esm",
            esModule: true,
            compact: true,
            assetFileNames: "[name].min.[ext]",
            entryFileNames: "[name].min.js",
            inlineDynamicImports: false,
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
        }
    })
})

export default defineConfig({
    build: {
        ...buildOptions,
    },
    esbuild: {
        legalComments: "none",
    }
})
