import { Map } from 'ol/index.js';
import Select from 'ol/interaction/Select.js';
import { type SelectEvent } from 'ol/interaction/Select';
import { type Options } from 'ol/interaction/Select';
import {
  ref,
  Ref,
  inject,
  toRaw,
  getCurrentInstance,
  watch,
  onUnmounted
} from 'vue';
import { Layer } from 'ol/layer';
import { FeatureLike } from 'ol/Feature';
import { Style } from 'ol/style';
import { StyleLike } from 'ol/style/Style';

type Args = {
  layer: Layer;
  selectedFeatures: Ref<any>;
  enabled: Ref<boolean>;
  options: Ref<Options>;
  selectStyleFun: Ref<
    (fetrue: FeatureLike, currentStyle: Style, resolution: number) => StyleLike
  >;
};

export default function useSelect({
  selectStyleFun,
  layer,
  selectedFeatures,
  enabled,
  options
}: Args) {
  const select = ref<Select>();
  const map = inject<Map>('map'),
    selectconditions: any = inject('ol-selectconditions');
  const instance = getCurrentInstance()!;

  const clear = () => {
    select.value?.dispose();
    map?.removeInteraction(toRaw(select.value!));
    map?.changed();
    selectedFeatures.value.clear();
  };
  function selectChange(event: SelectEvent) {
    selectedFeatures.value = event.target.getFeatures();
    instance.emit('selectChange', event, selectedFeatures.value as []);
  }

  const createSelect = () => {
    if (select.value) {
      clear();
    }
    select.value = new Select(
      Object.assign(
        {
          // @ts-ignore
          style: selectStyleFun.value,
          multi: false,
          layers: [layer],
          hitTolerance: 10,
          features: selectedFeatures.value,
          condition: selectconditions.click,
          wrapX: true
        },
        options.value
      )
    );
    select.value.on('select', selectChange);
    map?.addInteraction(toRaw(select.value));
    return select.value;
  };

  watch(
    enabled,
    (newVal, oldVal) => {
      if (newVal == oldVal) return;
      if (newVal) {
        createSelect();
      } else {
        clear();
      }
    },
    { immediate: true }
  );

  watch(
    options,
    () => {
      createSelect();
    },
    { deep: true }
  );
  // selectedFeatures.value.on('change:length', () => {
  //   if (enabled.value) {
  //     createModify();
  //   }
  //   instance.emit('selectChange', null, selectedFeatures.value as []);
  // });
  onUnmounted(() => {
    clear();
  });
  return { select, createSelect };
}
