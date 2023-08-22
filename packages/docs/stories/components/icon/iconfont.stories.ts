import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { IconFont } from '@ui/index';
import { formattedVueTemplate } from '@packages/utils/index';

// import
const meta = {
  component: IconFont,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '<a href="https://www.iconfont.cn/help/detail?spm=a313x.help_detail.i1.d8d11a391.54053a81pvsrKQ&helptype=code" target="_blank">IconFont icon</a>'
      }
    }
  }
} satisfies Meta<typeof IconFont>;

export default meta;

export const fontClass: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      components: { IconFont },
      setup() {
        return { args };
      },
      template: `<link rel="stylesheet" href='//at.alicdn.com/t/c/font_1462439_q408t28u0a.css'/>  <icon-font v-bind="args" />`
    };
  },
  args: {
    name: 'iconshezhi',
    type: 'font-class',
    style: {
      fontSize: '42px'
    }
  },
  parameters: {
    playroom: {
      code: formattedVueTemplate(`<template>
      <icon-font name="iconshezhi" type="font-class" style="font-size: 320px" /></template>
      <script>document.head.innerHTML += \`<link rel="stylesheet" href='//at.alicdn.com/t/c/font_1462439_q408t28u0a.css'/>\`</script>`)
    },
    docs: {
      description: {
        story: ``
      }
    }
  }
};

export const uniCode: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      components: { IconFont },
      setup() {
        return { args };
      },
      mounted() {
        const styleEle = document.createElement('style');
        styleEle.textContent = `/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: 'iconfont';  /* Project id 1462439 */
  src: url('//at.alicdn.com/t/c/font_1462439_q408t28u0a.woff2?t=1691743275874') format('woff2'),
       url('//at.alicdn.com/t/c/font_1462439_q408t28u0a.woff?t=1691743275874') format('woff'),
       url('//at.alicdn.com/t/c/font_1462439_q408t28u0a.ttf?t=1691743275874') format('truetype');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}`;
        document.head.appendChild(styleEle);
      },
      template: ` 
<icon-font v-bind="args" />`
    };
  },
  args: {
    name: '&#xe7cc;',
    type: 'unicode',
    style: {
      fontSize: '42px'
    }
  },
  parameters: {
    playroom: {
      code: formattedVueTemplate(`<template>
      <icon-font name="&#xe7cc;" style="font-size: 320px" type="unicode" /></template>
      <script>const styleEle = document.createElement('style');
styleEle.textContent = \` /* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: 'iconfont';  /* Project id 1462439 */
  src: url('//at.alicdn.com/t/c/font_1462439_q408t28u0a.woff2?t=1691743275874') format('woff2'),
       url('//at.alicdn.com/t/c/font_1462439_q408t28u0a.woff?t=1691743275874') format('woff'),
       url('//at.alicdn.com/t/c/font_1462439_q408t28u0a.ttf?t=1691743275874') format('truetype');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}\`;
document.head.appendChild(styleEle);</script>`)
    },
    docs: {
      description: {
        story: ``
      }
    }
  }
};

export const symbol: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      components: { IconFont },
      setup() {
        return { args };
      },
      mounted() {
        const styleEle = document.createElement('style');
        const scriptEle = document.createElement('script');
        scriptEle.src = `//at.alicdn.com/t/c/font_1462439_q408t28u0a.js`;
        styleEle.textContent = `<style type="text/css">
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>`;
        document.head.appendChild(styleEle);
        document.head.appendChild(scriptEle);
      },
      template: `
<icon-font v-bind="args" />`
    };
  },
  args: {
    name: 'iconlianjie',
    type: 'symbol',
    style: {
      width: '42px',
      height: '42px',
      fill: 'red'
    }
  },
  parameters: {
    playroom: {
      code: formattedVueTemplate(`<template>
      <icon-font name="iconlianjie" style="width: 420px;height:420px;fill: red" type="symbol" /></template>
<script>
const styleEle = document.createElement('style');
const scriptEle = document.createElement('script');
scriptEle.src = \`//at.alicdn.com/t/c/font_1462439_q408t28u0a.js\`;
styleEle.textContent = 
\`<style type="text/css">
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>\`;
document.head.appendChild(styleEle);
document.head.appendChild(scriptEle);</script>`)
    },
    docs: {
      description: {
        story: ``
      }
    }
  }
};
