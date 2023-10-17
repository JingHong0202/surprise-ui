<template>
  <template></template>
</template>

<script setup lang="ts">
import {
  ref,
  inject,
  onMounted,
  onUnmounted,
  watch,
  toRefs,
  computed
} from 'vue';
import { Fill, Icon, Stroke, Style } from 'ol/style.js';
import { Collection, Feature } from 'ol/index.js';
import { type SelectEvent } from 'ol/interaction/Select.js';
import { type DrawEvent } from 'ol/interaction/Draw.js';
import { Circle, Geometry } from 'ol/geom.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import { Coordinate } from 'ol/coordinate.js';
import { FeatureLike } from 'ol/Feature.js';
import type Map from 'ol/Map';
import { type Options as DrawOptions } from 'ol/interaction/Draw';
import { type Options as SelectOptions } from 'ol/interaction/Select';
import { type Options as ModifyOptions } from 'ol/interaction/Modify';
import { layersCommonDefaultProps } from './vue-openlayers/common/layers';
import { StyleLike } from 'ol/style/Style.js';
import useDraw from './composables/draw';
import useModify from './composables/modify';
import useSelect from './composables/select';
import { Options as LayerOptions } from 'ol/layer/Layer';
import { Options as SourceOptions } from 'ol/source/Vector';

defineOptions({
  inheritAttrs: false,
  name: 'su-interaction'
});

const props = withDefaults(
  defineProps<{
    /** 是否开启绘制 */
    drawEnabled?: boolean;
    /** 绘画类型 */
    drawOptions?: Partial<DrawOptions>;
    modifyOptions?: Partial<ModifyOptions>;
    selectOptions?: Partial<SelectOptions>;
    /** 是否开启编辑 */
    modifyEnabled?: boolean;
    /** 是否开启选择 */
    selectEnabled?: boolean;
    geojsonObject?: object;
    layerOptions?: LayerOptions<VectorSource<Geometry>>;
    sourceOptions?: SourceOptions<Geometry>;
    selectStyleFun?: (
      fetrue: FeatureLike,
      currentStyle: Style,
      resolution: number
    ) => StyleLike;
  }>(),
  {
    drawEnabled: false,
    modifyEnabled: false,
    selectEnabled: false,
    drawOptions: () => ({}),
    modifyOptions: () => ({}),
    selectOptions: () => ({}),
    sourceOptions: () => ({}),
    // @ts-ignore
    layerOptions: () => ({}),
    selectStyleFun: (
      feature: FeatureLike
      // currentStyle: Style
      // resolution: number
    ) => {
      var geometry = feature.getGeometry();
      // var shape = feature.get('shape');
      var styles = [];
      if (geometry?.getType() === 'Point') {
        const icon = new Icon({
          anchor: [0.5, 20],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          opacity: 1,
          rotateWithView: true,
          src: new URL('./static/marker_red.png', import.meta.url).href
        });
        icon.load();
        styles.push(
          new Style({
            image: icon
          })
        );
      } else {
        styles.push(
          new Style({
            stroke: new Stroke({
              color: 'rgba(255, 0, 0, 0.9)',
              width: 3
            }),
            fill: new Fill({
              color: 'rgba(255, 0, 0, 0.3)'
            })
          })
        );
      }

      // console.log(arguments);
      return styles;
    }
  }
);
const emits = defineEmits<{
  (event: 'modifyend', arg: any): void;
  (event: 'modifystart', arg: any): void;
  (event: 'drawstart', arg: DrawEvent): void;
  (event: 'drawend', arg: DrawEvent): void;
  (event: 'update:modifyEnabled', arg: any): void;
  (event: 'update:drawEnabled', arg: any): void;
  (event: 'selectChange', e: SelectEvent | null, features: any[]): void;
  (event: 'deled', e: KeyboardEvent): void;
  (event: 'setId', e: string | number): void;
}>();

const map = inject<Map>('map'),
  format: any = inject('ol-format'),
  featureInstance = inject('ol-feature');
const selectedFeatures = ref<any>(new Collection());

const {
  modifyEnabled,
  selectEnabled,
  selectStyleFun,
  // normalizeStyleFun,
  layerOptions,
  sourceOptions,
  geojsonObject: geojson,
  drawOptions,
  modifyOptions,
  selectOptions,
  drawEnabled
} = toRefs(props);

// @ts-ignore
const vectorLayer = new VectorLayer({
  renderBuffer: 100,
  updateWhileAnimating: false,
  updateWhileInteracting: false,
  style: (feature: FeatureLike) => {
    var geometry = feature.getGeometry();
    // var shape = feature.get('shape');
    const stroke = feature.get('stroke'),
      fill = feature.get('fill');
    // console.log(stroke, fill);
    // var shape = feature.get('shape');
    var styles = [];
    if (geometry?.getType() === 'Point') {
      const icon = new Icon({
        anchor: [0.5, 20],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 1,
        rotateWithView: true,
        src: new URL('./static/marker_blue.png', import.meta.url).href
      });
      icon.load();
      styles.push(
        new Style({
          image: icon
        })
      );
    } else {
      styles.push(
        new Style({
          stroke: new Stroke({
            color: stroke?.color || 'blue',
            width: stroke?.width || 3
          }),
          fill: new Fill({
            color: fill?.color || 'rgba(0, 0, 255, 0.23)'
          })
        })
      );
    }

    // console.log(arguments);
    return styles;
  },
  ...layersCommonDefaultProps,
  ...layerOptions.value
});
// @ts-ignore
emits('setId', vectorLayer.ol_uid as string);

watch(
  layerOptions,
  () => {
    vectorLayer.setProperties(layerOptions.value);
    // map?.removeLayer(vectorLayer);
    vectorLayer?.changed();
  },
  { deep: true }
);

const source = computed(
  () =>
    // @ts-ignore
    new VectorSource({
      overlaps: true,
      useSpatialIndex: true,
      wrapX: true,
      ...sourceOptions.value
    })
);

const { draw } = useDraw({
  source: source.value,
  selectedFeatures,
  options: drawOptions,
  enabled: drawEnabled
});
const { modify } = useModify({
  source: source.value,
  selectedFeatures,
  enabled: modifyEnabled,
  options: modifyOptions
});
const { select } = useSelect({
  selectStyleFun: selectStyleFun,
  layer: vectorLayer,
  enabled: selectEnabled,
  selectedFeatures,
  options: selectOptions
});
// const createSnap = () => {
//   snap?.dispose();
//   map?.removeInteraction(snap);
//   const olSnap = new Snap({
//     vertex: true,
//     edge: true,
//     pixelTolerance: 10,
//     source: source
//   });

//   return olSnap;
// };

// let snap: Snap;

watch(
  geojson!,
  () => {
    source.value.clear();
    if (!geojson?.value) return;
    const features: Feature<Geometry>[] = new format.GeoJSON().readFeatures(
      props.geojsonObject
    );
    const res: Feature<Geometry>[] = [];
    features.forEach(feature => {
      if (feature.get('shape') === 'Circle') {
        const circle = new Circle(
          [...feature.get('center')] as Coordinate,
          feature.get('radius') as number
        );
        // @ts-ignore
        const newFeature = new featureInstance(circle);
        newFeature.set('shape', 'Circle');

        // @ts-ignore
        res.push(newFeature as Feature<Geometry>);
      } else {
        res.push(feature);
      }
    });
    source.value.addFeatures(res);
  },
  { immediate: true }
);

onMounted(() => {
  map?.addLayer(vectorLayer);
  vectorLayer.setSource(source.value);
  document.addEventListener('keydown', removeFeature);
});

onUnmounted(() => {
  source.value.dispose();
  vectorLayer.setSource(null);
  vectorLayer.dispose();
  map?.removeLayer(vectorLayer);
  document.removeEventListener('keydown', removeFeature);
});

function removeFeature(e: KeyboardEvent) {
  // console.log(e.key);
  if (!modifyEnabled.value) return;
  if (e.key === 'Backspace' || e.key === 'Delete') {
    selectedFeatures.value.forEach((feature: Feature) => {
      source.value.removeFeature(feature);
    });
    selectedFeatures.value.clear();
    emits('deled', e);
  }
}

function exportFeatures() {
  formatFeatures(source.value?.getFeatures());
  const res = new format.GeoJSON().writeFeaturesObject(
    source.value?.getFeatures()
  );
  return res;
}
function formatFeatures(features: Feature[]) {
  features.forEach(feature => {
    if (feature.get('shape') === 'Circle') {
      const getGeometry = feature.getGeometry()! as Circle;
      var radius = getGeometry.getRadius();
      var center = getGeometry.getCenter();
      feature.set('radius', radius);
      feature.set('center', center);
    }
  });
}
defineExpose({
  interface: { source: source.value, layer: vectorLayer },
  // @ts-ignore
  draw,
  // @ts-ignore
  modify,
  // @ts-ignore
  select,
  // @ts-ignore
  // snap
  exportFeatures
});
</script>
