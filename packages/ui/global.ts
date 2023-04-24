import type { Plugin, App } from 'vue';
import {
  verticalVirtualList,
  horizonetalVirtualList
} from './components/virtual-list';
import { Test } from './components/test';

const globalComponents = [
  verticalVirtualList,
  horizonetalVirtualList,
  Test
] as Plugin[];

export const install = (app: App) => {
  globalComponents.forEach(component => app.use(component));
};
