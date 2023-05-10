import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import {
  verticalVirtualList,
  // verticalVirtualListType,
  horizonetalVirtualList
  // horizonetalVirtualListType
} from '@ui/index';
import { formattedVueTemplate } from '@packages/utils/index';

const data = buildData();
const verticalCode = formattedVueTemplate(`
  <template>
    <vertical-virtual-list :itemSize="100" :data="data" keyName="id" v-slot="{ slotScope }">
      <div v-text="slotScope.name" :style="'display:flex;justify-content:center;align-items:center;height: 100px;background-color:' + (slotScope.__index % 2 ? 'red' : 'green')"/>
    </vertical-virtual-list>
  </template>

  <script setup>
  const data = ${JSON.stringify(data, null, 2)}
  </script>`),
  horizonetalCode = formattedVueTemplate(`
  <template>
    <horizonetal-virtual-list :itemSize="100" :data="data" keyName="id" v-slot="{ slotScope }">
      <div v-text="slotScope.name" :style="'display:flex;justify-content:center;align-items:center;height: 100%;width:100px;background-color:' + (slotScope.__index % 2 ? 'red' : 'green')"/>
    </horizonetal-virtual-list>
  </template>

  <script setup>
  const data = ${JSON.stringify(data, null, 2)}
  </script>`);

const meta: Meta = {
  title: 'components/virtual-list',
  component: verticalVirtualList,
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

export const vertical: StoryObj<typeof verticalVirtualList> = {
  render: (args: ArgTypes, { argTypes }: { argTypes: ArgTypes }) => ({
    components: { verticalVirtualList },
    props: Object.keys(argTypes),
    template: `
    <vertical-virtual-list :itemSize="itemSize" :buffer="buffer" :data="data" :keyName="keyName" v-slot="{ slotScope }">
      ${args.default}
    </vertical-virtual-list>`
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
    }
  }
};

export const horizonetal: StoryObj<typeof horizonetalVirtualList> = {
  render: (args: ArgTypes, { argTypes }: { argTypes: ArgTypes }) => ({
    components: { horizonetalVirtualList },
    props: Object.keys(argTypes),
    template: `
    <horizonetal-virtual-list :itemSize="itemSize" :buffer="buffer" :data="data" :keyName="keyName" v-slot="{ slotScope }">
      ${args.default}
    </horizonetal-virtual-list>`
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
    }
  }
};
