/** @type { import('@storybook/vue3').Preview } */
import template from '../.storybook/template.mdx';
// import { DocsContainer } from '@storybook/blocks';
import React from 'react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories
} from '@storybook/blocks';

const preview = {
  parameters: {
    // docs: {
    //   page: () => (
    //     <>
    //       <Title />
    //       <Subtitle />
    //       <Description />
    //       <Stories />
    //     </>
    //   )
    // },
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
