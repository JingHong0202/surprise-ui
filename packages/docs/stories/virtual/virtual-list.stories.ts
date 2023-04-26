import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { verticalVirtualList } from 'surprise-ui';
import 'surprise-ui/es/style.css';
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const data = buildData();

const meta: Meta<typeof verticalVirtualList> = {
  title: 'components/virtual-list',
  component: verticalVirtualList,
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
    template: `
    <div style="height:300px;width:100%">
      <vertical-virtual-list :itemSize="itemSize" :buffer="buffer" :data="data" :keyName="keyName" #="{ slotScope }"><div v-text="slotScope.name" style="height: 100px"/></vertical-virtual-list>
    </div>`
  }),
  args: {
    itemSize: 100,
    data: data,
    keyName: 'id',
    buffer: 0
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
