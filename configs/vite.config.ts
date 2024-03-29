import { defineConfig, Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'node:path';
import { copyDirectory } from '../packages/utils/node/file';
// import themePreprocessorPlugin from '@zougt/vite-plugin-theme-preprocessor';

// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';
const themeProvider = (): Plugin => {
  return {
    name: 'themeProvider',
    async closeBundle() {
      copyDirectory('./packages/ui/theme', './dist/theme');
    }
  };
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx(),
    vue(),
    DefineOptions(),
    themeProvider()
    // themePreprocessorPlugin({
    //   scss: {
    //     multipleScopeVars: [
    //       {
    //         scopeName: 'theme-default',
    //         // 变量文件内容不应该夹带样式代码，设定上只需存在变量
    //         path: path.resolve('./packages/ui/theme/index.scss')
    //       },
    //     ]
    //   }
    // })
  ],
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
        }
        // {
        //   entryFileNames: '[name].mjs',
        //   preserveModules: true,
        //   preserveModulesRoot: './packages/utils',
        //   format: 'es',
        //   dir: 'dist/utils'
        // },
        // {
        //   entryFileNames: 'index.umd.js',
        //   format: 'umd',
        //   name: 'surprise_ui',
        //   dir: 'dist',
        //   exports: 'named',
        //   globals: {
        //     vue: 'Vue'
        //   }
        // },
        // {
        //   entryFileNames: 'index.cjs',
        //   format: 'cjs',
        //   dir: 'dist',
        //   exports: 'named'
        // }
      ],
      external: [
        'vue',
        /^ol\/(?!ol\.css)/,
        'ol',
        /^prettier\/.*/,
        '@iconify/vue'
      ]
    }
  },
  resolve: {
    alias: [
      { find: '@ui', replacement: path.resolve(__dirname, '../packages/ui') },
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
