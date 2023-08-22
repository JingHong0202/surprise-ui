<template>
  <div class="col-wrap" :style="{ width, marginLeft }">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { inject, computed } from 'vue';
// import { CalcInfo } from './interface';
import { RowProps } from './row.vue';

defineOptions({ name: 'su-col' });

const props = withDefaults(
  defineProps<{
    /** 占据格数 */
    span: number;
    /** 左偏移格数 */
    offset: number;
    /** 相对原本位置进行左拉取, 和 push 同时设置，只有 pull 生效*/
    pull: number;
    /** 相对原本位置进行右推， 和 pull 同时设置，只有 pull 生效*/
    push: number;
  }>(),
  {
    span: 1,
    offset: 0,
    pull: 0,
    push: 0
  }
);
const rowProps = inject<RowProps>('row-props', { cols: 24 }),
  rowWidth = 100 / rowProps.cols;
// const rowInfo = inject<ComputedRef<HTMLDivElement>>('row-info'),
//   calcInfo = inject<ComputedRef<CalcInfo>>('calc-info')

const width = computed(() => `${rowWidth * props.span}%`),
  marginLeft = computed(() => `${rowWidth * props.offset}%`),
  left = computed(() =>
    props.pull ? `calc(100% / ${rowProps.cols} * ${props.pull})` : ''
  ),
  right = computed(() =>
    props.push ? `calc(100% / ${rowProps.cols} * ${props.push})` : ''
  );
// `${(
//   Math.min(props.span, rowProps.cols as number) * calcInfo!.value.itemWidth
// ).toFixed(2)}px`
</script>

<style scoped lang="scss">
.col-wrap {
  // width: inherit;
  position: relative;
  box-sizing: border-box;
  left: v-bind('left');
  right: v-bind('right');
  display: block;
}
</style>
