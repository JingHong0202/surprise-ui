import Test from './src/test.vue';
import type { App, Component } from 'vue';

Test.name = 'TEST';
Test.install = (app: App) => {
  app.component(<string>Test.name, <Component>Test);
};

export { Test };
