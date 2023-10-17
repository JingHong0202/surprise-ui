<template>
  <ol-geo-location
    :projection="projection"
    @error="emits('error', $event)"
    @change="change">
    <template #default="{ position }">
      <slot :position="position">
        <interaction
          :geojson-object="{
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: position
                },
                properties: null
              }
            ]
          }"
          :z-index="3"
          :select-enabled="true" />
      </slot>
    </template>
  </ol-geo-location>
</template>

<script setup lang="ts">
import OlGeoLocation from './vue-openlayers/OlGeoLocation.vue';
import type { ObjectEvent } from 'ol/Object';
import { type GeolocationError } from 'ol/Geolocation';
import interaction from './interaction.vue';
import { inject } from 'vue';
import { Map } from 'ol/index.js';
import { SimpleGeometry } from 'ol/geom';

defineOptions({
  inheritAttrs: false,
  name: 'su-geo-location'
});

const map = inject<Map>('map');
const props = withDefaults(
  defineProps<{
    auto?: boolean;
  }>(),
  {}
);
const projection = map?.getView().getProjection();
const emits = defineEmits<{
  (event: 'change', arg: ObjectEvent): void;
  (event: 'error', arg: GeolocationError): void;
}>();

function change(e: ObjectEvent) {
  props.auto &&
    map?.getView().fit(e.target.values_.accuracyGeometry as SimpleGeometry, {
      size: map.getSize()
    });
  emits('change', e);
}
</script>
