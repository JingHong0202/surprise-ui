/** @type { import('@storybook/vue3').Preview } */
import { Preview } from '@storybook/vue3';
import React from 'react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls
} from '@storybook/blocks';
// import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils';

const wrapProvider = (Story, context) => {
  // const { theme } = context.globals;
  // if (theme === 'dark') {
  //   toggleTheme({ scopeName: 'theme-dark' });
  // } else {
  //   toggleTheme({ scopeName: 'theme-default' });
  // }
  return {
    components: { Story },
    template: '<story/>'
  };
};

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Property that specifies if the name of the item will be displayed
        showName: true,
        // Change title based on selected value
        dynamicTitle: true
      }
    }
  },
  decorators: [wrapProvider],

  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
        </>
      )
    },

    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'bg dark',
          value: '#333333'
        },
        {
          name: 'bg light',
          value: '#ffffff'
        }
        // {
        //   name: 'primary',
        //   value: '#fff'
        // }
      ]
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
