import { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { SuLoading } from '@ui/index';
import { vLoading } from '@packages/utils/vue/directives/loading';
const meta = {
  component: SuLoading,
  tags: ['autodocs'],
  argTypes: {
    // type: {
    //   options: ['primary', 'success', 'warning', 'danger', 'error', 'info'],
    //   control: { type: 'select' }
    // }
    // onClick: {
    //   action: 'btn'
    // }
    // label: {
    //   if: { arg: 'default', truthy: false }
    // }
    alignment: {
      options: ['to-bottom', 'to-top', 'to-left', 'to-right'],
      control: { type: 'select' }
    }
  },
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof SuLoading>;

export default meta;

export const normalize: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      setup() {
        return { args };
      },
      components: { SuLoading },
      template: `<su-loading style="width:200px;height:200px" v-bind="args">${args.default}</su-loading>`
    };
  },
  args: {
    default: '',
    alignment: 'to-bottom',
    type: 1,
    title: 'loading',
    spac: '20px',
    maskProps: { fullScreen: false }
  },
  parameters: {
    playroom: {
      code: `<template>
  <su-loading style="width: 200px; height: 200px" :type="1"></su-loading>
</template>
`
    }
  }
};

export const directive: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      setup() {
        return {
          args,
          accumulator() {
            let a = 0;
            // @ts-ignore
            clearInterval(args.time);
            args.time = setInterval(() => {
              // @ts-ignore
              args.title = `${(a += 1)}`;
            }, 100);
          },
          changeShow() {
            // @ts-ignore
            args.show = !args.show;
          }
        };
      },
      directives: { Loading: vLoading },
      components: { SuLoading },
      template: `<button @click="accumulator">accumulator</button><button @click="changeShow">toggle show</button> <div style="width:500px;height:200px" v-loading="args"></div>`
    };
  },
  args: {
    alignment: 'to-bottom',
    type: 1,
    title: 'loading',
    spac: '20px',
    show: true,
    maskProps: { fullScreen: false }
  },
  parameters: {
    playroom: {
      code: `<template>
  <button @click="accumulator">accumulator</button>
  <button @click="changeShow">toggle show</button>
  <div style="width: 500px; height: 200px" v-loading="args"></div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
const args = ref({
  alignment: 'to-bottom',
  type: 1,
  title: 'loading',
  spac: '20px',
  maskProps: { fullScreen: false },
  show:false
})
function accumulator() {
  let a = 0;
  clearInterval(args.value.time);
  args.value.time = setInterval(() => {
    args.title = \`\${(a += 1)}\`;
  }, 100);
}
function changeShow() {
  args.value.show = !args.value.show;
}
</script>

`
    }
  }
};

export const functional: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      setup() {
        let loading: unknown = null;
        return {
          args,
          loading,
          showLoading() {
            loading = SuLoading.service(
              args,
              document.getElementById('container')
            );
          },
          hideLoading() {
            if (!loading) return;
            // @ts-ignore
            loading.close();
          },
          update() {
            // @ts-ignore
            args.title = 'changed title';
            // @ts-ignore
            loading.update(args);
          }
        };
      },

      template: `<button @click="update">update</button><button @click="showLoading">loading</button><button @click="hideLoading">hide</button><div id="container" style="width:300px;height:300px;background:green"></div>`
    };
  },
  args: {
    alignment: 'to-bottom',
    type: 1,
    title: 'loading',
    spac: '20px',
    show: true,
    maskProps: { fullScreen: false }
  },
  parameters: {
    playroom: {
      code: `<template>
  <div style="width: 500px; height: 200px" v-loading="args"></div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
const args = ref({
  alignment: 'to-bottom',
  type: 1,
  title: 'loading',
  spac: '20px',
  maskProps: { fullScreen: false },
  show:false
})
onMounted(() => {
  setTimeout(() => {
    args.value.show = false;
  },5000)
})
</script>

`
    }
  }
};

export const all: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      setup() {
        return { args };
      },
      components: { SuLoading },
      template: `<div style="display:flex;flex-wrap:wrap;height: 100vh;overflow: auto;"><su-loading  v-for='num in 117'  :type="+num" style="width:150px;height:150px;margin:0 10px 20px 20px" v-bind="args">${args.default}</su-loading></div>`
    };
  },
  args: {
    default: '',
    alignment: 'to-bottom',
    title: 'loading',
    spac: '20px',
    maskProps: { fullScreen: false }
  },
  parameters: {
    playroom: {
      code: `<template>
  <div style="display: flex; flex-wrap: wrap;height: 100vh;overflow: auto;"
    ><su-loading
      v-for="num in 117"
      :type="+num"
      style="width: 150px; height: 150px; margin: 0 10px 20px 20px"
    ></su-loading
  ></div>
</template>
`
    }
  }
};
