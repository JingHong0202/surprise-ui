import horizonetalVirtualListVue from './src/horizonetal-virtual-list.vue';
import verticalVirtualListVue from './src/vertical-virtual-list.vue';
import { compInstall } from '@ui/utils/export';
import type { Plugin } from 'vue';
export const horizonetalVirtualList = compInstall(horizonetalVirtualListVue);
export const verticalVirtualList = compInstall(verticalVirtualListVue);
