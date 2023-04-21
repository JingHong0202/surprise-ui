import horizonetalVirtualList from './src/horizonetal-virtual-list.vue';
import verticalVirtualList from './src/vertical-virtual-list.vue';
import type { App, Component } from 'vue';

horizonetalVirtualList.name = 'horizonetal-virtual-list';
horizonetalVirtualList.install = (app: App) => {
  app.component(
    <string>horizonetalVirtualList.name,
    <Component>horizonetalVirtualList
  );
};

verticalVirtualList.name = 'vertical-virtual-list';
verticalVirtualList.install = (app: App) => {
  app.component(
    <string>verticalVirtualList.name,
    <Component>verticalVirtualList
  );
};

export { horizonetalVirtualList, verticalVirtualList };
