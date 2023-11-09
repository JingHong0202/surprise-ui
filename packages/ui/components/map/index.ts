import { default as map } from './src/map.vue';
import { default as interaction } from './src/interaction.vue';
import { compInstall } from '@ui/utils/export';
import 'ol/ol.css';
import 'ol-ext/dist/ol-ext.css';
import 'ol-contextmenu/ol-contextmenu.css';
// import "vue3-openlayers/styles.css";
export const SuMap = /*@__PURE__*/ compInstall(map);
export const SuInteraction = /*@__PURE__*/ compInstall(interaction);
