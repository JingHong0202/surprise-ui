import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { SuButton } from '@ui/index';
// import '../../../theme/dark.scss'
// import '../../../theme/custom.scss'
const meta = {
  component: SuButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['primary', 'success', 'warning', 'danger', 'error', 'info', ''],
      control: { type: 'select' }
    }
    // label: {
    //   if: { arg: 'default', truthy: false }
    // }
  },
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof SuButton>;

export default meta;

export const normalize: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      components: { SuButton },
      template: `<su-button v-bind="$props">${args.default}</su-button>`
    };
  },
  args: {
    type: '',
    label: 'button',
    customStyle: '',
    default: '',
    round: false,
    plain: false,
    disabled: false
  },
  parameters: {
    playroom: {
      code: `<template>
  <su-button type="primary">button</su-button>
</template>`
    }
  }
};
