<template>
  <div class="row-wrap" ref="rowEle">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue';
// import { CalcInfo } from './interface';
// import { vResize } from '@packages/utils/vue/directives/resize';

defineOptions({ name: 'su-row' });

export type RowProps = typeof props;
const props = withDefaults(
  defineProps<{
    /**  一行平均分成多少份,默认24 */
    cols: number;
  }>(),
  {
    cols: 24
  }
);

// const rowEle = ref<HTMLDivElement>(),
//   itemWidth = ref(0);

// provide(
//   'row-info',
//   computed(() => rowEle.value)
// );
// provide(
//   'calc-info',
//   computed<CalcInfo>(() => {
//     // (rowEle.value?.offsetWidth || 0) / props.cols
//     return {
//       itemWidth: itemWidth.value
//     };
//   })
// );

provide('row-props', props);

// function onResize(entries: ResizeObserverEntry[]) {
//   itemWidth.value = entries[0].contentRect.width / props.cols;
// }
</script>

<style scoped lang="scss">
.row-wrap {
  width: inherit;
  display: flex;
}
</style>
