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
    outDir: 'es',
    // emptyOutDir: true,
    minify: true,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot: './packages/ui'
      },
      external: ['vue']
    },
    lib: {
      entry: './packages/ui',
      formats: ['es']
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
