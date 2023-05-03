import type { App, Plugin } from 'vue';
type component<T> = T & Plugin;
// component export
export const compInstall = <T extends { name: string }>(component: T) => {
  (component as component<T>).install = (app: App) => {
    // console.log(app, component)
    const componentName = (component as component<T>).name;
    componentName && app.component(componentName, component as component<T>);
  };
  return component as component<T>;
};
