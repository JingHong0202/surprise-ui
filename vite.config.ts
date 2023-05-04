import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'node:path';
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx(), vue(), DefineOptions()],
  build: {
    target: 'esnext',
    emptyOutDir: false,
    minify: true,
    lib: {
      entry: './packages/ui'
    },
    rollupOptions: {
      output: [
        {
          entryFileNames: '[name].mjs',
          preserveModules: true,
          preserveModulesRoot: './packages/ui',
          format: 'es',
          dir: 'dist/es'
        },
        {
          entryFileNames: 'index.umd.js',
          format: 'umd',
          name: 'surprise_ui',
          dir: 'dist',
          exports: 'named',
          globals: {
            vue: 'Vue'
          }
        },
        {
          entryFileNames: 'index.cjs',
          format: 'cjs',
          dir: 'dist',
          exports: 'named'
        }
      ],
      external: ['vue']
    }
  },
  resolve: {
    alias: [
      { find: '@ui', replacement: path.resolve(__dirname, './packages/ui') },
      {
        find: '@packages',
        replacement: path.resolve(__dirname, './packages')
      },
      {
        find: '@docs',
        replacement: path.resolve(__dirname, './packages/docs')
      },
      {
        find: '@root',
        replacement: path.resolve(__dirname, './')
      }
    ]
  }
});
