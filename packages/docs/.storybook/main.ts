/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import { mergeConfig } from 'vite';
import path from 'path';
import DefineOptions from 'unplugin-vue-define-options/vite';

const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
    // '@storybook/addon-interactions',
    // '@storybook/addon-storysource'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [DefineOptions()],
      resolve: {
        alias: [
          {
            find: '@packages',
            replacement: path.resolve(process.cwd(), '../../packages')
          },
          {
            find: '@ui',
            replacement: path.resolve(process.cwd(), '../../packages/ui')
          },
          {
            find: '@docs',
            replacement: path.resolve(process.cwd(), '../../packages/docs')
          },
          {
            find: '@root',
            replacement: path.resolve(process.cwd(), '../../')
          }
        ]
      }
    });
  }
};
export default config;
