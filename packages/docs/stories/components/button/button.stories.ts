import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { SuButton } from '@ui/index';

const meta: Meta = {
  component: SuButton,
  tags: ['autodocs']
};
export default meta;

export const primary: StoryObj<typeof SuButton> = {
  render: (args: ArgTypes, { argTypes }: { argTypes: ArgTypes }) => ({
    components: { SuButton },
    template: '<su-button />'
  }),
  // decorators: [
  //   () => ({ template: '<div style="height:100vh;width:100%"><story/></div>' })
  // ],
  args: {}
  // parameters: {

  // }
};
