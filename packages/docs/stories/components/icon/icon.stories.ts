import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { icon } from '@ui/index';
// import '../../../theme/dark.scss'
// import '../../../theme/custom.scss'
const meta = {
  component: icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof icon>;

export default meta;

export const normalize: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      components: { icon },
      setup() {
        return { args };
      },
      template: `<icon v-bind="args"></icon>`
    };
  },
  args: {
    name: 'material-symbols:accessibility-new-rounded',
    width: 16,
    height: 16
  },
  parameters: {
    playroom: {
      code: `<icon name="material-symbols:accessibility-new-rounded"></icon>`
    }
  }
};
