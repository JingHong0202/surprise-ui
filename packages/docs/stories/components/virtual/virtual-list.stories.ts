import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { verticalVirtualList } from '@ui/components/virtual-list';
import 'surprise-ui/es/style.css';
import { formattedTemplate } from '@root/packages/utils/index.ts';
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const data = buildData();

const code = await formattedTemplate(`
  <template>
    <vertical-virtual-list :itemSize="100" :data="data" keyName="id">
      <template #="{ slotScope }">
        <div v-text="slotScope.name" style="height: 100px"/>
      </template>
    </vertical-virtual-list>
  </template>


  <script setup>
  const data = ${JSON.stringify(data)}
  </script>
  `);

const meta: Meta<typeof verticalVirtualList> = {
  title: 'components/virtual-list',
  component: verticalVirtualList,
  tags: ['autodocs'],
  decorators: [
    () => ({ template: '<div style="height:100vh;width:100%"><story/></div>' })
  ],
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
      description: '渲染数据数组key,相当于v-for key',
      defaultValue: { summary: '' }
    }
  }
};
export default meta;
type Story = StoryObj<typeof verticalVirtualList>;
// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args

function buildData() {
  const res = [];
  for (let index = 0; index < 50; index++) {
    res.push({ id: index, name: index });
  }
  return res;
}

export const vertical: Story = {
  render: (args: ArgTypes, { argTypes }: { argTypes: ArgTypes }) => ({
    components: { verticalVirtualList },
    props: Object.keys(argTypes),
    template: `<vertical-virtual-list :itemSize="itemSize" :buffer="buffer" :data="data" :keyName="keyName"><template #="{ slotScope }"><div v-text="slotScope.name" style="height: 100px"/></template></vertical-virtual-list>
  `
  }),
  args: {
    itemSize: 100,
    data: data,
    keyName: 'id',
    buffer: 0
  },
  parameters: {
    docs: {
      source: {
        code
      }
    }
  }
};

// export const Secondary = {
//   args: {
//     label: 'Button'
//   }
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button'
//   }
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button'
//   }
// };
