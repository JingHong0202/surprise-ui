import { Ref, computed, nextTick, onUpdated, ref, watchEffect } from 'vue';
import type { VirtualPropType } from '../vertical-virtual-list.vue';

type UseVirtualListArgs = {
  props: VirtualPropType;
  wrapElement: Ref<HTMLDivElement | undefined>;
  mode?: 'vertical' | 'horizontal';
};

type VerticalDirection = {
  startKey: '__top';
  endKey: '__bottom';
  attrName: 'height';
};

type HorizontalDirection = {
  startKey: '__left';
  endKey: '__right';
  attrName: 'width';
};

export function useVirtualList({
  props,
  wrapElement,
  mode = 'vertical'
}: UseVirtualListArgs) {
  const _data = ref<any[]>([]),
    direction: VerticalDirection | HorizontalDirection =
      mode == 'vertical'
        ? { startKey: '__top', endKey: '__bottom', attrName: 'height' }
        : { startKey: '__left', endKey: '__right', attrName: 'width' },
    placeholderHeight = computed(() => {
      return (
        _data.value[_data.value.length - 1] &&
        _data.value[_data.value.length - 1][direction.endKey]
      );
    }),
    visibleCount = computed(() => {
      return Math.ceil((wrapElement.value?.clientHeight ?? 0) / props.itemSize);
    }),
    aboveCount = computed(() => {
      return Math.min(
        startIndex.value,
        Math.round(props.buffer * visibleCount.value)
      );
    }),
    belowCount = computed(() => {
      return Math.min(
        _data.value.length - endIndex.value,
        Math.round(props.buffer * visibleCount.value)
      );
    }),
    visibleData = computed(() => {
      const start = startIndex.value - aboveCount.value,
        end = endIndex.value + belowCount.value;
      // console.log(start, end)
      return _data.value.slice(start, end + 1);
    }),
    startIndex = ref(0),
    endIndex = computed(() => startIndex.value + visibleCount.value),
    startOffset = computed(() => {
      if (startIndex.value >= 1) {
        const size =
          _data.value[startIndex.value][direction.startKey] -
          (_data.value[startIndex.value - aboveCount.value]
            ? _data.value[startIndex.value - aboveCount.value][
                direction.startKey
              ]
            : 0);
        return _data.value[startIndex.value - 1][direction.endKey] - size;
      } else {
        return 0;
      }
    });

  watchEffect(() => {
    _data.value = !props.data?.length
      ? []
      : props.data.map((item, index) => {
          return {
            ...item,
            ...initPositions(+index)
          };
        });
  });

  onUpdated(() => {
    const children = wrapElement.value?.querySelectorAll(
      '.virtual-list-container > .virtual-item'
    );

    if (children === undefined) return;
    nextTick(() => {
      for (let index = 0; index < children.length; index++) {
        const element = children[index];
        const rect = element.getBoundingClientRect(),
          id = +element.getAttribute('_id')!,
          oldHeight = _data.value[id].__size,
          dVal = oldHeight - rect[direction.attrName];

        if (dVal) {
          _data.value[id].__size = rect[direction.attrName];
          _data.value[id][direction.endKey] =
            _data.value[id][direction.endKey] - dVal;
          for (
            let index_below = id + 1;
            index_below < _data.value.length;
            index_below++
          ) {
            const element_below = _data.value[index_below];
            element_below[direction.startKey] =
              _data.value[index_below - 1][direction.endKey];
            element_below[direction.endKey] =
              element_below[direction.endKey] - dVal;
          }
        }
      }
    });
  });

  function initPositions(index: number) {
    return mode === 'vertical'
      ? {
          __size: props.itemSize,
          __bottom: (index + 1) * props.itemSize,
          __top: index * props.itemSize,
          __index: index
        }
      : {
          __size: props.itemSize,
          __right: (index + 1) * props.itemSize,
          __left: index * props.itemSize,
          __index: index
        };
  }

  return {
    _data,
    placeholderHeight,
    visibleCount,
    visibleData,
    startIndex,
    endIndex,
    startOffset
  };
}
