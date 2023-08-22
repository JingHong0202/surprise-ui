import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { SuVerticalVirtualList, SuHorizonetalVirtualList } from '@ui/index';
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
  <su-vertical-virtual-list
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
  </su-vertical-virtual-list>
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
  <su-horizonetal-virtual-list
    :itemSize="100"
    :data="data"
    keyName="id"
    v-slot="{ slotScope }">
    <div v-text="slotScope.name" :style="'display:flex;justify-content:center;align-items:center;height: 100%;width:100px;background-color:' + (slotScope.__index % 2 ? 'red' : 'green')"/>
  </su-horizonetal-virtual-list>
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
  component: SuVerticalVirtualList,
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

export const vertical: StoryObj<typeof SuVerticalVirtualList> = {
  render: (args: ArgTypes, { argTypes }: { argTypes: ArgTypes }) => ({
    components: { SuVerticalVirtualList },
    props: Object.keys(argTypes),
    template: `
    <su-vertical-virtual-list :itemSize="itemSize" :buffer="buffer" :data="data" :keyName="keyName" v-slot="{ slotScope }">
      ${args.default}
    </su-vertical-virtual-list>`
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

export const horizonetal: StoryObj<typeof SuHorizonetalVirtualList> = {
  render: (args: ArgTypes, { argTypes }: { argTypes: ArgTypes }) => ({
    components: { SuHorizonetalVirtualList },
    props: Object.keys(argTypes),
    template: `
    <su-horizonetal-virtual-list :itemSize="itemSize" :buffer="buffer" :data="data" :keyName="keyName" v-slot="{ slotScope }">
      ${args.default}
    </su-horizonetal-virtual-list>`
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
