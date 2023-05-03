import horizonetalVirtualListVue from './src/horizonetal-virtual-list.vue';
import verticalVirtualListVue from './src/vertical-virtual-list.vue';
import { compInstall } from '@ui/utils/export';
export const horizonetalVirtualList = compInstall(horizonetalVirtualListVue);
export const verticalVirtualList = compInstall(verticalVirtualListVue);
export const horizonetalVirtualListType = horizonetalVirtualListVue;
export const verticalVirtualListType = verticalVirtualListVue;
