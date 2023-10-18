import { Geometry } from 'ol/geom.js';
import Draw, { type Options } from 'ol/interaction/Draw.js';
import VectorSource from 'ol/source/Vector';
import { Ref } from 'vue';
type Args = {
    source: VectorSource<Geometry>;
    selectedFeatures: Ref<any>;
    enabled: Ref<boolean>;
    options: Ref<Partial<Options>>;
};
export default function useDraw({ source, selectedFeatures, enabled, options }: Args): {
    createDraw: () => Ref<Draw | undefined>;
    draw: Ref<Draw | undefined>;
};
export {};
