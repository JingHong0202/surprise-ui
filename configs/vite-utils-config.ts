import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'node:path';

// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx(), vue(), DefineOptions()],
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: '@use "@ui/theme/utils.scss" as *;'
      }
    }
  },
  build: {
    target: 'esnext',
    emptyOutDir: false,
    minify: true,
    lib: {
      entry: './packages/utils'
    },
    rollupOptions: {
      output: [
        {
          entryFileNames: '[name].mjs',
          preserveModules: true,
          preserveModulesRoot: './packages/utils',
          format: 'es',
          dir: 'dist/utils'
        }
      ],
      external: ['vue', /^ol(\/(?!ol\.css))?/, /^prettier\/.*/, '@iconify/vue']
    }
  },
  resolve: {
    alias: [
      {
        find: '@ui',
        replacement: path.resolve(__dirname, '../packages/ui')
      },
      {
        find: '@packages',
        replacement: path.resolve(__dirname, '../packages')
      },
      {
        find: '@docs',
        replacement: path.resolve(__dirname, '../packages/docs')
      },
      {
        find: '@root',
        replacement: path.resolve(__dirname, '../')
      }
    ]
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    testTimeout: 30000
  }
});
