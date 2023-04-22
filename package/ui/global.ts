import type { Plugin } from 'vue';
import {
  verticalVirtualList,
  horizonetalVirtualList
} from './components/virtual-list';
import { Test } from './components/test';

export default [verticalVirtualList, horizonetalVirtualList, Test] as Plugin[];
