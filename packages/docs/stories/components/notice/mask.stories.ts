import { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { SuMask } from '@ui/index';

const meta = {
  component: SuMask,
  tags: ['autodocs'],
  argTypes: {
    // type: {
    //   options: ['primary', 'success', 'warning', 'danger', 'error', 'info'],
    //   control: { type: 'select' }
    // }
    // onClick: {
    //   action: 'btn'
    // }
    // label: {
    //   if: { arg: 'default', truthy: false }
    // }
    alignment: {
      options: [
        'center',
        'left-center',
        'right-center',
        'center-top',
        'center-bottom'
      ],
      control: { type: 'select' }
    }
  },
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof SuMask>;

export default meta;

export const normalize: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      setup() {
        return { args };
      },
      components: { SuMask },
      template: `<su-mask style="width:200px;height:200px" v-bind="args">${args.default}</su-mask>`
    };
  },
  args: {
    default: '默认尺寸随父元素'
  },
  parameters: {
    playroom: {
      code: `<template>
  <su-button type="primary">button</su-button>
</template>`
    }
  }
};

// export const fullScreen: StoryObj<typeof meta> = {
//   render: (args: ArgTypes) => {
//     return {
//       setup() {
//         return { args };
//       },
//       components: { SuMask },
//       template: `<div style="width:200px;height:200px"><su-mask v-bind="args">${args.default}</su-mask></div>`
//     };
//   },
//   args: {
//     default: '默认尺寸随父元素',
//     fullScreen:
//   },
//   parameters: {
//     playroom: {
//       code: `<template>
//   <su-button type="primary">button</su-button>
// </template>`
//     }
//   }
// };
