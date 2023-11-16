import { default as o } from './src/loading.vue';
import { compInstall } from '@ui/utils/export';
import { service } from './src/service';

const SuLoading = /*@__PURE__*/ Object.assign(compInstall(o), { service });
export { SuLoading };
