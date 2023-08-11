import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { IconIfy } from '@ui/index';
// import
const meta = {
  component: IconIfy,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '[iconify icon](https://iconify.design/)'
      }
    }
  }
} satisfies Meta<typeof IconIfy>;

export default meta;

export const online: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      components: { IconIfy },
      setup() {
        return { args };
      },
      template: `<icon-ify v-bind="args" />`
    };
  },
  args: {
    name: 'material-symbols:accessibility-new-rounded',
    width: 32,
    height: 32,
    online: true
  },
  parameters: {
    playroom: {
      code: `<icon-ify name="material-symbols:accessibility-new-rounded"></icon-ify>`
    },
    docs: {
      description: {
        story: ``
      }
    }
  }
};

export const offline: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      components: { IconIfy },
      setup() {
        return { args };
      },
      template: `<icon-ify v-bind="args" />`
    };
  },
  args: {
    name: 'material-symbols:wifi-tethering-rounded',
    width: 128,
    height: 128,
    online: false
  },
  parameters: {
    playroom: {
      code: `<icon-ify name="material-symbols:accessibility-new-rounded"></icon-ify>`
    }
  }
};
