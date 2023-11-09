import { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { SuButton } from '@ui/index';

const meta = {
  component: SuButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['primary', 'success', 'warning', 'danger', 'error', 'info'],
      control: { type: 'select' }
    }
    // onClick: {
    //   action: 'btn'
    // }
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
      setup() {
        return { args };
      },
      components: { SuButton },
      template: `<su-button v-bind="args">${args.default}</su-button>`
    };
  },
  args: {
    type: 'primary',
    label: 'button label',
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
