import { resolve } from 'node:path'
import { type BuildOptions, build, defineConfig } from 'vite'
import minify from 'vite-plugin-minify'

const additionalBuildSources = [
  resolve(__dirname, 'src/code.mjs'),
  resolve(__dirname, 'src/styles/custom.scss'),
]

const buildOptions = {
  minify: 'terser',
  sourcemap: false,
  assetsDir: '',
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
    },
  },
  rollupOptions: {
    output: {
      format: 'cjs',
      strict: true,
      validate: true,
      inlineDynamicImports: false,
      minifyInternalExports: true,
    },
  },
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
        output: {
          ...buildOptions.rollupOptions.output,
          assetFileNames: '[name].min.[ext]',
          entryFileNames: '[name].min.js',
        },
      },
    },
    esbuild: {
      legalComments: 'none',
    },
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
    legalComments: 'none',
  },
})
