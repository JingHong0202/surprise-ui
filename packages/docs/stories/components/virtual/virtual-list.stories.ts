import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import {
  verticalVirtualList,
  verticalVirtualListType,
  horizonetalVirtualList,
  horizonetalVirtualListType
} from '@ui/components/virtual-list';
import 'surprise-ui/es/style.css';
import { formattedTemplate } from '@packages/utils/index';

const data = buildData();
const verticalCode = await formattedTemplate(`
  <template>
    <vertical-virtual-list :itemSize="100" :data="data" keyName="id" v-slot="{ slotScope }">
      <div v-text="slotScope.name" style="height: 100px"/>
    </vertical-virtual-list>
  </template>

  <script setup>
  const data = ${JSON.stringify(data, null, 2)}
  </script>`),
  horizonetalCode = await formattedTemplate(`
  <template>
    <horizonetal-virtual-list :itemSize="100" :data="data" keyName="id" v-slot="{ slotScope }">
      <div v-text="slotScope.name" style="height: 100%;width:100px"/>
    </horizonetal-virtual-list>
  </template>

  <script setup>
  const data = ${JSON.stringify(data, null, 2)}
  </script>`);

const meta: Meta = {
  title: 'components/virtual-list',
  component: verticalVirtualListType,
  tags: ['autodocs'],

  argTypes: {
    itemSize: {
      type: { name: 'number', required: true },
      description: '列表子元素大小',
      defaultValue: { summary: 0 }
    },
    buffer: {
      type: { name: 'number' },
      description: '列表滚动缓存，减少滚动空白',
      defaultValue: { summary: 0 }
    },
    data: {
      description: '渲染数据数组',
      defaultValue: { summary: '[]' }
    },
    keyName: {
      type: { name: 'string', required: true },
      description: '设置数据 v-for key',
      defaultValue: { summary: '' }
    },
    default: {
      description: '子元素插槽',
      type: { name: 'other', value: 'string', required: true }
    }
  }
};
export default meta;
function buildData() {
  const res = [];
  for (let index = 0; index < 50; index++) {
    res.push({ id: index, name: index });
  }
  return res;
}

export const vertical: StoryObj<typeof verticalVirtualListType> = {
  render: (args: ArgTypes, { argTypes }: { argTypes: ArgTypes }) => ({
    components: { verticalVirtualList },
    props: Object.keys(argTypes),
    template: `
    <vertical-virtual-list :itemSize="itemSize" :buffer="buffer" :data="data" :keyName="keyName" v-slot="{ slotScope }">
      ${args.default}
    </vertical-virtual-list>`
  }),
  decorators: [
    () => ({ template: '<div style="height:50vh;width:100%"><story/></div>' })
  ],
  args: {
    itemSize: 100,
    data: data,
    keyName: 'id',
    buffer: 0,
    default: `<div v-text="slotScope.name" style="height: 100px"/>`
  },
  parameters: {
    docs: {
      source: {
        code: verticalCode
      }
    }
  }
};

export const horizonetal: StoryObj<typeof horizonetalVirtualListType> = {
  render: (args: ArgTypes, { argTypes }: { argTypes: ArgTypes }) => ({
    components: { horizonetalVirtualList },
    props: Object.keys(argTypes),
    template: `
    <horizonetal-virtual-list :itemSize="itemSize" :buffer="buffer" :data="data" :keyName="keyName" v-slot="{ slotScope }">
      ${args.default}
    </horizonetal-virtual-list>`
  }),
  decorators: [
    () => ({ template: '<div style="height:30vh;"><story/></div>' })
  ],
  args: {
    itemSize: 100,
    data: data,
    keyName: 'id',
    buffer: 0,
    default: `<div v-text="slotScope.name" style="height: 100%;width:100px"/>`
  },
  parameters: {
    docs: {
      source: {
        code: horizonetalCode
      }
    }
  }
};
