<template>
  <div
    class="virtual-list-wrap"
    ref="wrap"
    @scroll.prevent.stop="wrapScrollHandler">
    <div
      class="virtual-list-placeholder"
      :style="{ height: placeholderHeight + 'px' }"></div>
    <div
      class="virtual-list-container"
      :style="{ transform: `translate3d(0,${startOffset}px,0)` }">
      <div
        class="virtual-item"
        v-for="item in visibleData"
        :_id="item.__index"
        :key="item[props.keyName]">
        <!-- 
          @slot 列表子元素插槽，slotScope 获取当前条目
         -->
        <slot :slotScope="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useVirtualList } from './composables/useVirtualList';
import { binarySearch } from './common/utils';

const props = withDefaults(
  defineProps<{
    /** 渲染数据数组 */
    data: any[];
    /** 子元素大小 */
    itemSize: number;
    /** 列表缓存，减少滚动太快出现空白 */
    buffer?: number;
    /** 设置数据 v-for key */
    keyName: string;
  }>(),
  {
    itemSize: 0,
    buffer: 0,
    keyName: '',
    data: () => []
  }
);
const wrap = ref<HTMLDivElement>(),
  { _data, visibleData, startIndex, startOffset, placeholderHeight } =
    useVirtualList({ props, wrapElement: wrap });

defineExpose({
  reset,
  container: wrap,
  _data
});

defineOptions({
  name: 'su-vertical-virtual-list'
});

function wrapScrollHandler() {
  const scrollTop = wrap.value!.scrollTop;
  startIndex.value = binarySearch(_data.value, scrollTop, 'vertical');
}

function reset() {
  startIndex.value = 0;
  wrap.value?.scroll({ top: 0, left: 0 });
}
</script>

<style lang="scss" scoped>
.virtual-list-wrap {
  width: inherit;
  height: inherit;
  position: relative;
  overflow-y: auto;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  .virtual-list-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  .virtual-list-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    // height: 100%;
    // display: flex;
    // flex-direction: column;
  }
}
</style>
