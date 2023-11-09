<template>
  <ol-map
    v-bind="mapProps"
    ref="mapRef"
    @dblclick="emits('map-dblclick', $event)"
    @click="emits('map-click', $event)"
    @singleclick="emits('map-singleclick', $event)"
    @pointerdrag="emits('map-pointerdrag', $event)"
    @pointermove="emits('map-pointermove', $event)"
    @moveend="emits('map-moveend', $event)"
    @movestart="emits('map-movestart', $event)"
    @postrender="emits('map-postrender', $event)"
    @precompose="emits('map-precompose', $event)"
    @postcompose="emits('map-postcompose', $event)">
    <ol-view
      ref="viewRef"
      v-bind="viewProps"
      @centerChanged="emits('view-center-changed', $event)"
      @zoomChanged="emits('view-zoom-changed', $event)"
      @resolutionChanged="emits('view-resolution-changed', $event)"
      @rotationChanged="emits('view-rotation-changed', $event)" />
    <slot name="layer">
      <ol-webgl-tile-layer v-bind="layerOptions">
        <ol-source-OSM v-bind="sourceOptions" />
      </ol-webgl-tile-layer>
    </slot>

    <slot name="geo-location">
      <geo-location
        v-if="geolocationEnabled"
        @error="emits('geoloc-error', $event)"
        @change="emits('geoloc-change', $event)"
        auto>
        <template #default="{ position }">
          <slot name="geo-location-point" :position="position"></slot>
        </template>
      </geo-location>
    </slot>
    <slot />
  </ol-map>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import feature from 'ol/Feature.js';
import * as geom from 'ol/geom.js';
import * as format from 'ol/format.js';
import * as loadingstrategy from 'ol/loadingstrategy.js';
import * as selectconditions from 'ol/events/condition.js';
import * as extent from 'ol/extent.js';
import * as animations from 'ol/easing.js';
import { type default as MapRefType } from 'ol/Map';
import { type default as ViewRefType } from 'ol/View';
import type MapEvent from 'ol/MapEvent';
import type MapBrowserEvent from 'ol/MapBrowserEvent';
import OlMap from './vue-openlayers/OlMap.vue';
import OlView from './vue-openlayers/OlView.vue';
import OlWebglTileLayer from './vue-openlayers/OlWebglTileLayer.vue';
import OlSourceOSM from './vue-openlayers/OlSourceOSM.vue';
import geoLocation from './geo-location.vue';
import { ObjectEvent } from 'ol/Object';
import { GeolocationError } from 'ol/Geolocation';

defineOptions({
  inheritAttrs: false,
  name: 'su-map'
});

const props = withDefaults(
  defineProps<{
    options?: {
      debug: boolean;
    };
    /** https://vue3openlayers.netlify.app/componentsguide/map/ */
    mapProps?: InstanceType<typeof OlMap>['$props'];
    /** https://vue3openlayers.netlify.app/componentsguide/view/#events */
    viewProps?: InstanceType<typeof OlView>['$props'];
    /** 是否开启地理定位 */
    geolocationEnabled?: boolean;
    layerOptions?: InstanceType<typeof OlWebglTileLayer>['$props'];
    sourceOptions?: InstanceType<typeof OlSourceOSM>['$props'];
  }>(),
  {
    mapProps: () => ({
      style: 'height: inherit',
      loadTilesWhileAnimating: true,
      loadTilesWhileInteracting: true
    }),
    viewProps: () => ({
      projection: 'EPSG:3857',
      maxZoom: 20,
      minZoom: 4,
      center: [104.98803025032215, 35.314630129492954]
    }),
    geolocationEnabled: false
  }
);

provide('ol-options', props.options || {});
provide('ol-feature', feature);
provide('ol-geom', geom);
provide('ol-animations', animations);
provide('ol-format', format);
provide('ol-loadingstrategy', loadingstrategy);
provide('ol-selectconditions', selectconditions);
provide('ol-extent', extent);

const mapRef = ref<{ map: MapRefType }>();
const viewRef = ref<ViewRefType>();
defineExpose({
  mapRef,
  viewRef
});

const emits = defineEmits<{
  (event: 'map-click', arg: MapBrowserEvent<PointerEvent>): void;
  (event: 'map-dblclick', arg: MapBrowserEvent<PointerEvent>): void;
  (event: 'map-singleclick', arg: MapBrowserEvent<PointerEvent>): void;
  (event: 'map-pointerdrag', arg: MapBrowserEvent<PointerEvent>): void;
  (event: 'map-pointermove', arg: MapBrowserEvent<PointerEvent>): void;
  (event: 'map-movestart', arg: MapEvent): void;
  (event: 'map-moveend', arg: MapEvent): void;
  (event: 'map-postrender', arg: MapEvent): void;
  (event: 'map-precompose', arg: MapEvent): void;
  (event: 'map-postcompose', arg: MapEvent): void;
  (event: 'view-center-changed', arg: [number, number]): void;
  (event: 'view-resolution-changed', arg: number): void;
  (event: 'view-rotation-changed', arg: number): void;
  (event: 'view-zoom-changed', arg: number): void;
  (event: 'geoloc-change', arg: ObjectEvent): void;
  (event: 'geoloc-error', arg: GeolocationError): void;
  (event: 'select-change', features: any, e: any): void;
}>();
</script>
