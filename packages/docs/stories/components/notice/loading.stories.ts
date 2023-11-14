import { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { SuLoading } from '@ui/index';

const meta = {
  component: SuLoading,
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
      options: ['to-bottom', 'to-top', 'to-left', 'to-right'],
      control: { type: 'select' }
    }
  },
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof SuLoading>;

export default meta;

export const normalize: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      setup() {
        return { args };
      },
      components: { SuLoading },
      template: `<su-loading style="width:200px;height:200px" v-bind="args">${args.default}</su-loading>`
    };
  },
  args: {
    default: '',
    alignment: 'to-bottom',
    type: 1,
    title: 'loading',
    spac: '20px',
    maskProps: { fullScreen: false }
  },
  parameters: {
    playroom: {
      code: `<template>
  <su-loading style="width: 200px; height: 200px" :type="1"></su-loading>
</template>
`
    }
  }
};

export const all: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      setup() {
        return { args };
      },
      components: { SuLoading },
      template: `<div style="display:flex;flex-wrap:wrap"><su-loading  v-for='num in 117'  :type="+num" style="width:150px;height:150px;margin:0 10px 20px 20px" v-bind="args">${args.default}</su-loading></div>`
    };
  },
  args: {
    default: '',
    alignment: 'to-bottom',
    title: 'loading',
    spac: '20px',
    maskProps: { fullScreen: false }
  },
  parameters: {
    playroom: {
      code: `<template>
  <div style="display: flex; flex-wrap: wrap"
    ><su-loading
      v-for="num in 117"
      :type="+num"
      style="width: 150px; height: 150px; margin: 0 10px 20px 20px"
    ></su-loading
  ></div>
</template>
`
    }
  }
};
