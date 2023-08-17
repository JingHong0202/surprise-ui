import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import {
  VerticalVirtualList,
  // VerticalVirtualListType,
  HorizonetalVirtualList
  // HorizonetalVirtualListType
} from '@ui/index';
import { formattedVueTemplate } from '@packages/utils/index';

const data = buildData();
const verticalCode = formattedVueTemplate(`<script setup>
function buildData() {
  const res = [];
  for (let index = 0; index < 50; index++) {
    res.push({ id: index, name: index });
  }
  return res;
}
const data = buildData();
</script>

<template>
  <Vertical-virtual-list
    :itemSize="100"
    :data="data"
    keyName="id"
    v-slot="{ slotScope }">
    <div
      v-text="slotScope.name"
      :style="
        'display:flex;justify-content:center;align-items:center;height: 100px;background-color:' +
        (slotScope.__index % 2 ? 'red' : 'green')
      " />
  </Vertical-virtual-list>
</template>

<style>
#app,
html,
body {
  height: 100%;
}
</style>`),
  horizonetalCode = formattedVueTemplate(`
 <script setup>
function buildData() {
  const res = [];
  for (let index = 0; index < 50; index++) {
    res.push({ id: index, name: index });
  }
  return res;
}
const data = buildData();
</script>

<template>
  <Horizonetal-virtual-list
    :itemSize="100"
    :data="data"
    keyName="id"
    v-slot="{ slotScope }">
    <div v-text="slotScope.name" :style="'display:flex;justify-content:center;align-items:center;height: 100%;width:100px;background-color:' + (slotScope.__index % 2 ? 'red' : 'green')"/>
  </Horizonetal-virtual-list>
</template>

<style>
#app,
html,
body {
  height: 100%;
}
</style>`);

const meta: Meta = {
  title: 'components/virtual-list',
  component: VerticalVirtualList,
  tags: ['autodocs']
};
export default meta;
function buildData() {
  const res = [];
  for (let index = 0; index < 50; index++) {
    res.push({ id: index, name: index });
  }
  return res;
}

export const vertical: StoryObj<typeof VerticalVirtualList> = {
  render: (args: ArgTypes, { argTypes }: { argTypes: ArgTypes }) => ({
    components: { VerticalVirtualList },
    props: Object.keys(argTypes),
    template: `
    <Vertical-virtual-list :itemSize="itemSize" :buffer="buffer" :data="data" :keyName="keyName" v-slot="{ slotScope }">
      ${args.default}
    </Vertical-virtual-list>`
  }),
  decorators: [
    () => ({ template: '<div style="height:100vh;width:100%"><story/></div>' })
  ],
  args: {
    itemSize: 100,
    data: data,
    keyName: 'id',
    buffer: 0,
    default: `<div v-text="slotScope.name" :style="'display:flex;justify-content:center;align-items:center;height: 100px;background-color:' + (slotScope.__index % 2 ? 'red' : 'green')"/>`
  },
  parameters: {
    docs: {
      source: {
        code: verticalCode
      }
    },
    playroom: {
      code: verticalCode
    }
  }
};

export const horizonetal: StoryObj<typeof HorizonetalVirtualList> = {
  render: (args: ArgTypes, { argTypes }: { argTypes: ArgTypes }) => ({
    components: { HorizonetalVirtualList },
    props: Object.keys(argTypes),
    template: `
    <Horizonetal-virtual-list :itemSize="itemSize" :buffer="buffer" :data="data" :keyName="keyName" v-slot="{ slotScope }">
      ${args.default}
    </Horizonetal-virtual-list>`
  }),
  decorators: [
    () => ({ template: '<div style="height:100vh;width:100%"><story/></div>' })
  ],
  args: {
    itemSize: 100,
    data: data,
    keyName: 'id',
    buffer: 0,
    default: `<div v-text="slotScope.name" :style="'display:flex;justify-content:center;align-items:center;height: 100%;width:100px;background-color:' + (slotScope.__index % 2 ? 'red' : 'green')"/>`
  },
  parameters: {
    docs: {
      source: {
        code: horizonetalCode
      }
    },
    playroom: {
      code: horizonetalCode
    }
  }
};
