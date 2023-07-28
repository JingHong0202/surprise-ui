import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { icon } from '@ui/index';

const meta = {
  component: icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '[iconify icon](https://iconify.design/)'
      }
    }
  }
} satisfies Meta<typeof icon>;

export default meta;

export const online: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      components: { icon },
      setup() {
        return { args };
      },
      template: `<icon v-bind="args" />`
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
      code: `<icon name="material-symbols:accessibility-new-rounded"></icon>`
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
      components: { icon },
      setup() {
        return { args };
      },
      template: `<icon v-bind="args" />`
    };
  },
  args: {
    name: 'material-symbols:accessibility-new-rounded',
    width: 128,
    height: 128,
    online: false
  },
  parameters: {
    playroom: {
      code: `<icon name="material-symbols:accessibility-new-rounded"></icon>`
    }
  }
};
