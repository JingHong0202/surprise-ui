import { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { Button } from '@ui/index';

const meta = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['primary', 'success', 'warning', 'danger', 'error', 'info'],
      control: { type: 'select' }
    }
    // label: {
    //   if: { arg: 'default', truthy: false }
    // }
  },
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Button>;

export default meta;

export const normalize: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      setup() {
        return { args };
      },
      components: { Button },
      template: `<Button v-bind="args">${args.default}</Button>`
    };
  },
  args: {
    type: 'primary',
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
  <Button type="primary">button</Button>
</template>`
    }
  }
};
