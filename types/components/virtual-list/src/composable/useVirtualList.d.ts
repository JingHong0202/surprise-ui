import { Ref } from 'vue';
import type { VirtualPropType } from '../common/virtual-list';
type UseVirtualListArgs = {
    props: VirtualPropType;
    wrapElement: Ref<HTMLDivElement | undefined>;
    mode?: 'vertical' | 'horizontal';
};
export declare function useVirtualList({ props, wrapElement, mode }: UseVirtualListArgs): {
    _data: Ref<any[]>;
    placeholderHeight: import("vue").ComputedRef<any>;
    visibleCount: import("vue").ComputedRef<number>;
    visibleData: import("vue").ComputedRef<any[]>;
    startIndex: Ref<number>;
    endIndex: import("vue").ComputedRef<number>;
    startOffset: import("vue").ComputedRef<number>;
};
export {};
