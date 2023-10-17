import type { Ref } from 'vue';
import { inject, onMounted, onUnmounted, watch, computed } from 'vue';
import type featureType from 'ol/Feature';
import usePropsAsObjectProperties from '@/composables/usePropsAsObjectProperties';
import type { Class } from '@/components/animations/AnimationTypes';
import { Geometry } from 'ol/geom.js';

export default function useGeometry(
  GeometryType: Class,
  props: Record<string, unknown>
) {
  const feature = inject<Ref<featureType>>('feature');

  const { properties } = usePropsAsObjectProperties(props);

  const geometry = computed(
    // eslint-ignore
    () =>
      new GeometryType(
        ...Object.values(
          properties as {
            [s: string]: unknown;
          }
        )
      )
  );

  watch(properties, () => {
    feature?.value?.setGeometry(geometry.value as Geometry);
    feature?.value?.changed();
  });

  watch(
    () => feature,
    () => {
      feature?.value?.setGeometry(geometry.value as Geometry);
    }
  );

  onMounted(() => {
    feature?.value?.setGeometry(geometry.value as Geometry);
  });

  onUnmounted(() => {
    feature?.value?.setGeometry(undefined);
  });

  return {
    geometry
  };
}
