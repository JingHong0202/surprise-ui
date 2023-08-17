/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import { mergeConfig } from 'vite';
import path from 'path';
import DefineOptions from 'unplugin-vue-define-options/vite';
// import themePreprocessorPlugin from '@zougt/vite-plugin-theme-preprocessor';

const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-vue-playroom'
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
  typescript: {
    // Overrides the default Typescript configuration to allow multi-package components to be documented via Autodocs.
    reactDocgen: 'react-docgen',
    skipBabel: true,
    check: false
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        DefineOptions()
        // themePreprocessorPlugin({
        //   scss: {
        //     multipleScopeVars: [
        //       {
        //         scopeName: 'theme-default',
        //         path: path.resolve(process.cwd(),'../../packages/ui/theme/index.scss')
        //       },
        //       {
        //         scopeName: 'theme-dark',
        //         path: path.resolve(process.cwd(),'../../packages/ui/theme/dark.scss')
        //       }
        //     ]
        //   }
        // })
      ],
      css: {
        preprocessorOptions: {
          scss: {
            charset: 'utf-8',
            additionalData: '@use "../theme/dark.scss" as *;\n'
          }
        }
      },
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
