import { StoryObj, ArgTypes } from '@storybook/vue3';
import { SuCol, SuRow } from '@ui/index';

const meta = {
  component: SuRow,
  tags: ['autodocs'],
  argTypes: {
    span: {
      control: { type: 'number' },
      description: 'col 占据格数'
    },
    offset: {
      control: { type: 'number' },
      description: 'col 向左偏移格数'
    },
    pull: {
      control: { type: 'number' },
      description:
        'col 相对原本位置进行左拉取, 和 push 同时设置，只有 pull 生效'
    },
    push: {
      control: { type: 'number' },
      description: 'col 相对原本位置进行右推， 和 pull 同时设置，只有 pull 生效'
    }
    // label: {
    //   if: { arg: 'default', truthy: false }
    // }
  }
};

export default meta;

export const normalize: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      components: { SuRow, SuCol },
      setup() {
        return { args };
      },
      template: `
      <su-row>
        <su-col :span="args.span" :offset="args.offset" :pull="args.pull">
          <div style="width:100%;background:#f1f1f1;height: 50px"></div>
        </su-col>
        <su-col :span="args.span" :offset="args.offset" :push="args.push">
          <div style="width:100%;background:#9f9f9f;height: 50px"></div>
        </su-col>
         <su-col :span="args.span" :offset="args.offset" :pull="args.pull">
          <div style="width:100%;background:#f1f1f1;height: 50px"></div>
        </su-col>
        <su-col :span="args.span" :offset="args.offset" :push="args.push">
          <div style="width:100%;background:#9f9f9f;height: 50px"></div>
        </su-col>
      </su-row>`
    };
  },
  args: {
    span: 6,
    offset: 0,
    pull: 6,
    push: 6
  },
  parameters: {
    playroom: {
      code: `<template>
  <su-row>
    <su-col :span="6" :pull="6">
      <div style="width: 100%; background: #f1f1f1; height: 50px"></div>
    </su-col>
    <su-col :span="6" :push="6">
      <div style="width: 100%; background: #9f9f9f; height: 50px"></div>
    </su-col>
    <su-col :span="6" :pull="6">
      <div style="width: 100%; background: #f1f1f1; height: 50px"></div>
    </su-col>
    <su-col :span="6" :push="6">
      <div style="width: 100%; background: #9f9f9f; height: 50px"></div>
    </su-col>
  </su-row>

  <su-row>
    <su-col :span="6" :offset="6">
      <div style="width: 100%; background: #f1f1f1; height: 50px"></div>
    </su-col>
    <su-col :span="6" :offset="6">
      <div style="width: 100%; background: #9f9f9f; height: 50px"></div>
    </su-col>
  </su-row>
</template>
`
    }
  }
};
