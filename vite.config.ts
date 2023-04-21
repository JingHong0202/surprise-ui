import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx(), vue()],
  build: {
    cssCodeSplit: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: 'package/ui/index.ts',
      name: 'my-library',
      formats: ['es', 'cjs', 'umd'],
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' }
      }
    }
  }
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src')
  //   }
  // }
});
