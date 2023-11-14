<template>
  <div
    class="mask-wrap"
    :class="[fullScreen && 'full-screen']"
    :style="{ backgroundColor: bgColor, zIndex, ...alignmentStyle }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

defineOptions({ name: 'su-mask' });
const props = withDefaults(
  defineProps<{
    /**
     * 背景颜色
     */
    bgColor?: string;
    /**
     * 是否全屏
     */
    fullScreen?: boolean;
    /**
     * 层级
     */
    zIndex?: number;
    /**
     * 对齐
     */
    alignment?:
      | 'center'
      | 'left-center'
      | 'right-center'
      | 'center-top'
      | 'center-bottom';
  }>(),
  {
    bgColor: 'rgba(0, 0, 0, 0.3)',
    fullScreen: false,
    zIndex: 192002,
    alignment: 'center'
  }
);
const alignmentStyle = computed(() => {
  const split = props.alignment.split('-');
  let x, y;
  const handler = {
    center: (i: number) => (i ? (y = 'center') : (x = 'center')),
    top: () => (y = 'flex-start'),
    bottom: () => (y = 'flex-end'),
    left: () => (x = 'flex-start'),
    right: () => (x = 'flex-end')
  };
  if (split.length === 1) {
    x = 'center';
    y = 'center';
  } else {
    split.forEach((method, index) => {
      handler[method as keyof typeof handler](index);
    });
  }

  return { alignItems: y, justifyContent: x };
});
</script>

<style scoped lang="scss">
.mask-wrap {
  width: inherit;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}
.full-screen {
  width: 100% !important;
  height: 100% !important;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
