import { join, resolve } from 'node:path'
import * as path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import tailwindcss from 'tailwindcss'

import { name, devDependencies, peerDependencies } from './package.json'

const formattedName = name.match(/[^/]+$/)?.[0] ?? name

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, join('src', 'index.ts')),
      fileName: 'index',
      formats: ['es', 'umd'],
      name: formattedName,
    },
    minify: false,
    rollupOptions: {
      // Exclude peer dependencies from the bundle to reduce bundle size
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(devDependencies),
        'react/jsx-runtime',
      ],
      output: {
        dir: 'dist',
        globals: {
          react: 'React',
          'react/jsx-runtime': 'react/jsx-runtime',
          'react-dom': 'ReactDOM',
        },
      },
    },
    target: 'esnext',
    sourcemap: false,
  },
  plugins: [
    react(),
    dts({ insertTypesEntry: true }), // Output .d.ts files
    cssInjectedByJsPlugin(),
  ],
  css: {
    postcss: {
      // @ts-ignore
      plugins: [tailwindcss],
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
