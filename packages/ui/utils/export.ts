import type { App, Plugin } from 'vue';
type component<T> = T & Plugin & { name: string };
// component export
export const compInstall = <T>(component: T): Plugin => {
  (component as component<T>).install = (app: App) => {
    // console.log(app, component)
    const componentName = (component as component<T>).name;
    componentName && app.component(componentName, component as component<T>);
  };
  return component as Plugin;
};
