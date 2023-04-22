import { default as t } from './src/test.vue';
import type { App, Component } from 'vue';

const install = () => {
  t.install = (app: App) => {
    console.log(app, t)
    app.component(<string>t.name, <Component>t);
  };
  return t;
};

export const Test = install();
