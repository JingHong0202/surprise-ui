import { Map } from 'ol/index.js';
import { Geometry } from 'ol/geom.js';
import Draw, { type Options } from 'ol/interaction/Draw.js';
import { type DrawEvent } from 'ol/interaction/Draw';
import VectorSource from 'ol/source/Vector';
import {
  Ref,
  nextTick,
  ref,
  getCurrentInstance,
  inject,
  toRaw,
  onUnmounted,
  watch
} from 'vue';

type Args = {
  source: VectorSource<Geometry>;
  selectedFeatures: Ref<any>;
  enabled: Ref<boolean>;
  options: Ref<Partial<Options>>;
};

export default function useDraw({
  source,
  selectedFeatures,
  enabled,
  options
}: Args) {
  const draw = ref<Draw>();
  const instance = getCurrentInstance();
  const map = inject<Map>('map');
  const styleControl = inject<
    Ref<{
      fill: { color: string };
      stroke: { color: string; width: string | number };
    }>
    // @ts-ignore
  >('style', null);
  const clear = () => {
    draw.value?.abortDrawing();
    map?.removeInteraction(toRaw(draw.value!));
    draw.value?.dispose();
  };
  const createDraw = () => {
    if (draw.value) {
      clear();
    }
    draw.value = new Draw(
      Object.assign(
        {
          source: source,
          type: 'Point',
          stopClick: true,
          clickTolerance: 6,
          dragVertexDelay: 500,
          snapTolerance: 12,
          freehand: false,
          wrapX: true
        },
        options?.value
      )
    );
    const drawend = async (event: DrawEvent) => {
      if (options?.value?.type === 'Circle') {
        event.feature.set('shape', 'Circle');
      }
      if (styleControl?.value) {
        const { fill, stroke } = styleControl.value;
        event.feature.set('stroke', { ...stroke });
        event.feature.set('fill', { ...fill });
      }
      selectedFeatures.value.push(event.feature);
      await nextTick();
      instance?.emit('drawend', event);
    };
    draw.value.on('drawstart', (event: DrawEvent) => {
      instance?.emit('drawstart', event);
    });
    draw.value.on('drawend', drawend);
    map?.addInteraction(toRaw(draw.value));
    map?.changed();
    return draw;
  };

  // watchEffect(createDraw);
  watch(
    enabled,
    (newVal, oldVal) => {
      if (newVal == oldVal) return;
      if (newVal) {
        createDraw();
      } else {
        clear();
      }
    },
    { immediate: true }
  );

  watch(
    options,
    () => {
      createDraw();
    },
    { deep: true }
  );
  onUnmounted(() => {
    clear();
  });

  return { createDraw, draw };
}
