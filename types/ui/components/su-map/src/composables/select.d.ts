import Select from 'ol/interaction/Select.js';
import { type Options } from 'ol/interaction/Select';
import { Ref } from 'vue';
import { Layer } from 'ol/layer';
import { FeatureLike } from 'ol/Feature';
import { Style } from 'ol/style';
import { StyleLike } from 'ol/style/Style';
type Args = {
    layer: Layer;
    selectedFeatures: Ref<any>;
    enabled: Ref<boolean>;
    options: Ref<Options>;
    selectStyleFun: Ref<(fetrue: FeatureLike, currentStyle: Style, resolution: number) => StyleLike>;
};
export default function useSelect({ selectStyleFun, layer, selectedFeatures, enabled, options }: Args): {
    select: Ref<Select | undefined>;
    createSelect: () => Select;
};
export {};
