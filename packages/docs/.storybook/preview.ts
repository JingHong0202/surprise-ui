/** @type { import('@storybook/vue3').Preview } */
import { withSource } from './withSource'

const preview = {
   decorators : [
    //  withSource
  ],
  parameters: {
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
