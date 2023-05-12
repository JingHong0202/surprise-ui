import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { SuButton } from '@ui/index';

const meta: Meta = {
  component: SuButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['primary', 'success', 'warning', 'danger', 'error', 'info'],
      control: { type: 'radio' }
    }
  }
};
export default meta;

export const primary: StoryObj<typeof SuButton> = {
  render: (args: ArgTypes, { argTypes }: { argTypes: ArgTypes }) => ({
    components: { SuButton },
    props: Object.keys(argTypes),
    template: `<su-button :label='label'><template v-if="${
      'default' in args
    }" v-slot>${args.default}</template></su-button>`
  }),
  // decorators: [
  //   () => ({ template: '<div style="height:100vh;width:100%"><story/></div>' })
  // ],
  args: {
    type: 'primary',
    label: 'button'
  }
  // parameters: {

  // }
};
