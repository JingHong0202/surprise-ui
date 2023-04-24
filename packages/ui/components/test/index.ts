import { default as t } from './src/test.vue';
import { compInstall } from '@ui/utils/export';
import { Plugin } from 'vue';
export const Test = compInstall(t);
