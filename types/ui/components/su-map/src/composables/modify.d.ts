import { Geometry } from 'ol/geom.js';
import Modify from 'ol/interaction/Modify.js';
import VectorSource from 'ol/source/Vector.js';
import { type Options } from 'ol/interaction/Modify';
import { Ref } from 'vue';
type Args = {
    source: VectorSource<Geometry>;
    selectedFeatures: Ref<any>;
    enabled: Ref<boolean>;
    options: Ref<Options>;
};
export default function useModify({ source, selectedFeatures, enabled, options }: Args): {
    modify: Ref<Modify | undefined>;
    createModify: () => Modify;
    clear: () => void;
};
export {};
