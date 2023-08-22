import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { IconIfy } from '@ui/index';
import { formattedVueTemplate } from '@packages/utils/index';

// import
const meta = {
  component: IconIfy,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://iconify.design/" target="_blank">iconify icon</a>'
      }
    }
  }
} satisfies Meta<typeof IconIfy>;

export default meta;

export const online: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      components: { IconIfy },
      setup() {
        return { args };
      },
      template: `<icon-ify v-bind="args" />`
    };
  },
  args: {
    name: 'material-symbols:accessibility-new-rounded',
    width: 32,
    height: 32,
    online: true
  },
  parameters: {
    playroom: {
      code: formattedVueTemplate(`<template>
  <icon-ify online width='132' height='132' name="material-symbols:accessibility-new-rounded"/>
</template>`)
    },
    docs: {
      description: {
        story: ``
      }
    }
  }
};

export const offline: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      components: { IconIfy },
      setup() {
        return { args };
      },
      template: `<icon-ify v-bind="args" />`
    };
  },
  args: {
    name: 'material-symbols:accessibility-new-rounded',
    width: 128,
    height: 128,
    online: false
  },
  parameters: {
    playroom: {
      code: formattedVueTemplate(`<template><icon-ify name="material-symbols:accessibility-new-rounded" :online='false' width=128 height=128 />
      </template>`)
    }
  }
};

export const offlineSvg: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      components: { IconIfy },
      setup() {
        return { args };
      },
      template: `<icon-ify v-bind="args" />`
    };
  },
  args: {
    name: {
      body: `<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M10 14L3.5 20.5M14 10L20.5 3.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M21 3H15M3 21V15M21 3V9M3 21H9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="8;0"/></path></g>
`,
      width: 24,
      height: 24
    },
    width: 128,
    height: 128,
    online: false
  },
  parameters: {
    playroom: {
      code: formattedVueTemplate(`
<template>
  <icon-ify
    :name='iconData'
    :width="128"
    :height="128"
  />
</template>

<script setup>
const iconData ={
      body: ${`\`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M10 14L3.5 20.5M14 10L20.5 3.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M21 3H15M3 21V15M21 3V9M3 21H9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="8;0"/></path></g>\``},
      width: 24,
      height: 24
    }
</script>
`)
    }
  }
};
