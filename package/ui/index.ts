// support Tree Shaking
export * from './components/virtual-list';
export * from './components/test';
// global
import globalComponents from './global';
import { App } from 'vue';
const install = (app: App) => {
  console.log(globalComponents)
  globalComponents.forEach(component => app.use(component));
};
export { install as default };
