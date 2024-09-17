import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { build, type BuildOptions, defineConfig, type ESBuildOptions } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

const additionalBuildSources = [
  resolve(__dirname, 'src/code.mjs'),
]

const buildOptions = {
  sourcemap: false,
  target: 'esnext',
  chunkSizeWarningLimit: 1024,
  rollupOptions: {
    output: {
      format: 'es',
      strict: true,
      validate: true,
      inlineDynamicImports: false,
      minifyInternalExports: true,
    },
  },
} satisfies BuildOptions

const esbuildOptions = {
  legalComments: 'none',
  format: 'esm',
  platform: 'browser',
  minifySyntax: true,
  minifyWhitespace: true,
  minifyIdentifiers: true,
  keepNames: false,
} satisfies ESBuildOptions

const isProd = Bun.env.PROD

if (isProd === 'true') {
  // This is for building the code.js file solely.
// If we add multiple inputs in `rollupOptions`, the generated script will not be minified.
// So building "html and its script" and `additionalBuildSources` separately is required.
  additionalBuildSources.forEach(async (buildSource) => {
    await build({
      configFile: false,
      plugins: [
        react(),
        ViteMinifyPlugin({}),
      ],
      build: {
        ...buildOptions,
        rollupOptions: {
          input: buildSource,
          output: {
            ...buildOptions.rollupOptions.output,
            assetFileNames: 'assets/[name].min.[ext]',
            entryFileNames: 'assets/[name].min.js',
          },
        },
      },
      esbuild: {
        ...esbuildOptions,
      },
    })
  })
}

export default defineConfig({
  plugins: [
    react(),
    ViteMinifyPlugin({}),
  ],
  build: {
    ...buildOptions,
    emptyOutDir: false,
  },
  esbuild: {
    ...esbuildOptions,
  },
})
