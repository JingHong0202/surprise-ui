import type { Plugin, App } from 'vue';
import * as globalComponents from './components';

export const install = (app: App) => {
  Object.values(globalComponents).forEach(component =>
    app.use(component as Plugin)
  );
};
