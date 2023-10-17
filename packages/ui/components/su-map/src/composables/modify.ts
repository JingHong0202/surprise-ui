import { Map } from 'ol';
import { Geometry } from 'ol/geom.js';
import Modify, { ModifyEvent } from 'ol/interaction/Modify.js';
import VectorSource from 'ol/source/Vector.js';
import { type Options } from 'ol/interaction/Modify';

import {
  ref,
  Ref,
  inject,
  toRaw,
  getCurrentInstance,
  watch,
  watchEffect,
  onUnmounted
} from 'vue';

type Args = {
  source: VectorSource<Geometry>;
  selectedFeatures: Ref<any>;
  enabled: Ref<boolean>;
  options: Ref<Options>;
};

export default function useModify({
  source,
  selectedFeatures,
  enabled,
  options
}: Args) {
  const modify = ref<Modify>();
  const map = inject<Map>('map'),
    selectconditions: any = inject('ol-selectconditions');
  const instance = getCurrentInstance()!;

  const clear = () => {
    modify.value?.dispose();
    map?.removeInteraction(toRaw(modify.value!));
    map?.changed();
  };
  const createModify = () => {
    if (modify.value) {
      clear();
    }
    modify.value = new Modify(
      Object.assign(
        {
          source: source,
          features: selectedFeatures.value,
          deleteCondition: selectconditions.altKeyOnly,
          pixelTolerance: 10,
          wrapX: true
        },
        options.value
      )
    );
    modify.value.on('modifystart', (event: ModifyEvent) => {
      instance.emit('modifystart', event);
    });
    modify.value.on('modifyend', (event: ModifyEvent) => {
      instance.emit('modifyend', event);
      createModify();
    });
    map?.addInteraction(toRaw(modify.value));
    map?.changed();
    return modify.value;
  };

  watch(
    enabled,
    (newVal, oldVal) => {
      if (newVal == oldVal) return;
      if (newVal) {
        createModify();
      } else {
        clear();
      }
    },
    { immediate: true }
  );

  watch(
    options,
    () => {
      createModify();
    },
    { deep: true }
  );

  selectedFeatures.value.on('change:length', () => {
    if (enabled.value) {
      createModify();
    }
    instance.emit('selectChange', null, selectedFeatures.value as []);
  });
  onUnmounted(() => {
    selectedFeatures.value.dispose();
    clear();
  });
  return { modify, createModify, clear };
}
