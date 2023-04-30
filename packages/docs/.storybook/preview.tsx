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

const preview: Preview = {
  // globalTypes: {
  //   theme: {
  //     name: 'Theme',
  //     description: 'Global theme for components',
  //     defaultValue: 'light',
  //     toolbar: {
  //       icon: 'circlehollow',
  //       // Array of plain string values or MenuItem shape (see below)
  //       items: ['light', 'dark'],
  //       // Property that specifies if the name of the item will be displayed
  //       showName: true,
  //       // Change title based on selected value
  //       dynamicTitle: true
  //     }
  //   }
  // },
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
          name: 'dark',
          value: '#333333'
        },
        {
          name: 'light',
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
