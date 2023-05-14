import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { SuButton } from '@ui/index';
import { h } from 'vue';

const meta = {
  component: SuButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['primary', 'success', 'warning', 'danger', 'error', 'info'],
      control: { type: 'select' }
    }
  }
} satisfies Meta<typeof SuButton>;
export default meta;

export const primary: StoryObj<typeof meta> = {
  render: (args: ArgTypes, { argTypes }: { argTypes: ArgTypes }) => {
    return {
      components: { SuButton },
      template: `<su-button v-bind="$props">${args.default}</su-button>`
    };
  },
  args: {
    type: 'primary',
    label: 'button',
    customStyle: '',
    default: ''
  }
  // parameters: {

  // }
};
