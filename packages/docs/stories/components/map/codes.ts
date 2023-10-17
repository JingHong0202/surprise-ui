export const pathCode = `<template>
  <button
    style="margin-right: 20px"
    :disabled="selected.length !== 1"
    @click="controller && playing ? stop() : start()"
  >
    {{ playing ? 'stop' : 'start' }}
  </button>
  <label for="draw" style="margin-right: 10px">Draw</label>
  <input
    type="checkbox"
    style="margin-right: 10px"
    id="draw"
    v-model="args.drawEnabled"
  />
  <label for="reverse">Reverse</label>
  <input
    type="checkbox"
    style="margin-right: 30px"
    id="reverse"
    v-model="reverse"
  />
  <label for="repeat">repeat</label>:
  <input
    type="number"
    style="margin-right: 10px; width: 50px"
    id="repeat"
    v-model="repeat"
  />
  <label for="duration" style="margin-right: 10px">duration</label>:
  <input
    type="number"
    style="margin-right: 10px; width: 50px"
    step="1000"
    id="duration"
    v-model="duration"
    :disabled="speed > 0"
  />
  <label for="duration" style="margin-right: 10px">speed</label>:
  <input
    type="number"
    style="margin-right: 10px; width: 50px"
    step="100"
    id="speed"
    v-model="speed"
  />
  <button @click="reset" :disabled="playing">reset</button>
  <div class="map-wrap" style="height: 100%">
    <su-map ref="suMapRef" v-bind="args">
      <su-interaction
        @select-change="select"
        ref="featureRef"
        :draw-enabled="args.drawEnabled"
        :modify-enabled="args.modifyEnabled"
        :select-enabled="args.selectEnabled"
        :modify-options="args.modifyOptions"
        :select-options="args.selectOptions"
        :geojsonObject="geojsonObject"
        :draw-options="args.drawOptions"
      />
    </su-map>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { animationPath } from 'surprise-ui/utils/runtime/map/ol/animation.mjs'
import { Icon, Style } from 'ol/style.js'
import { Point } from 'ol/geom.js'
import Feature from 'ol/Feature.js'
const args = ref({
  mapProps: {
    style: 'height: inherit',
    loadTilesWhileAnimating: true,
    loadTilesWhileInteracting: true,
  },
  viewProps: {
    projection: 'EPSG:3857',
  },
  geolocationEnabled: false,
  selectEnabled: true,
  drawEnabled: true,
  modifyEnabled: true,
  drawOptions: {
    type: 'LineString',
  },
  modifyOptions: {
    wrapX: false,
  },
})

const geojsonObject = {
  type: 'FeatureCollection',
  features: [],
}
const suMapRef = ref()
const featureRef = ref()
const selected = ref([])
const controller = ref()
const playing = ref(false)
const reverse = ref(false)
const repeat = ref(0)
const duration = ref(5000)
const speed = ref(0)
const animation = ref()
const point = ref(new Feature(new Point([])))
const icon = new Icon({
  anchor: [0.5, 20],
  anchorXUnits: 'fraction',
  anchorYUnits: 'pixels',
  opacity: 1,
  rotateWithView: false,
  src: \`data:image/png;base64,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\`,
})
icon.load()
point.value.setStyle(
  new Style({
    image: icon,
  })
)

function select(event, selectFeature) {
  selected.value = selectFeature
    .getArray()
    .filter(feature => feature.getGeometry().getType() === 'LineString')
}
function stop() {
  controller.value.stop()
  playing.value = false
}
function changeSpeed() {
  animation.value.duration_ =
    animation.value.dist_ / (animation.value.speed_ += 500)
}
function reset() {
  controller.value = null
  playing.value = false
  args.modifyEnabled = true
}
async function start() {
  args.modifyEnabled = false
  if (controller.value && !controller.value.isPlaying()) {
    playing.value = true
    controller.value.start()
    return
  }
  playing.value = true

  await animationPath({
    map: suMapRef.value.mapRef.map,
    layer: featureRef.value.interface.layer,
    pathFeature: selected.value[0],
    pointFeature: point.value,
    pathOptions: {
      duration: duration.value,
      speed: speed.value,
      fade(p0) {
        return 1
      },
    },
    reverse: reverse.value,
    repeat: repeat.value,
    animationEndCallback() {
      controller.value = null
      playing.value = false
      args.modifyEnabled = true
    },
    updateController(e, a) {
      controller.value = e
      animation.value = a
    },
    rotate: -90,
  })
}
</script>

<style>
#storybook-root {
  height: inherit;
}
body,
html,
.map-wrap,
#app {
  height: 100% !important;
}
</style>
`;

export const drawCode = `<template>
  <input
    type="checkbox"
    id="checkbox-select"
    v-model="args.selectEnabled"
    style="margin-right: 10px"
  />
  <label for="checkbox" style="margin-right: 10px">Select</label>
  <input
    type="checkbox"
    id="checkbox-draw"
    v-model="args.drawEnabled"
    style="margin-right: 10px"
  />
  <label for="checkbox" style="margin-right: 10px">Draw</label>

  <input
    type="checkbox"
    style="margin-right: 10px"
    id="checkbox-modify"
    v-model="args.modifyEnabled"
  />
  <label for="checkbox" style="margin-right: 10px">Modify</label>
  <label for="checkbox" style="margin-right: 10px">Type:</label>
  <select id="type" v-model="args.drawOptions.type" style="margin-right: 10px">
    <option value="Point">Point</option>
    <option value="LineString">LineString</option>
    <option value="Polygon">Polygon</option>
    <option value="Circle">Circle</option>
  </select>
  <div class="map-wrap" style="height: 100%">
    <su-map ref="suMapRef" v-bind="args">
      <su-interaction
        :draw-enabled="args.drawEnabled"
        :modify-enabled="args.modifyEnabled"
        :select-enabled="args.selectEnabled"
        :modify-options="args.modifyOptions"
        :select-options="args.selectOptions"
        :geojsonObject="geojsonObject"
        :draw-options="args.drawOptions"
      />
    </su-map>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const args = ref({
  mapProps: {
    style: 'height: inherit',
    loadTilesWhileAnimating: true,
    loadTilesWhileInteracting: true,
  },
  viewProps: {
    projection: 'EPSG:3857',
  },
  geolocationEnabled: false,
  selectEnabled: true,
  drawEnabled: true,
  modifyEnabled: true,
  drawOptions: {
    type: 'Polygon',
  },
  modifyOptions: {
    wrapX: false,
  },
})

const geojsonObject = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-1022421.6903425176, 19567.879241005518],
            [-1198532.6035115635, -694659.713055681],
            [4891.969810251147, -880554.5658452301],
            [259274.39994331822, -293518.1886150767],
            [-1022421.6903425176, 19567.879241005518],
          ],
        ],
      },
      properties: null,
    },
  ],
}
</script>

<style>
#storybook-root {
  height: inherit;
}
body,
html,
.map-wrap,
#app {
  height: 100% !important;
}
</style>
`;

export const geolocationCode = `<template>
  <div style="height: 100%" class="map-wrap"
    ><su-map
      v-bind="args"
      @geoloc-error="
        e => {
          console.log(e)
        }
      "
  /></div>
</template>

<script setup>
const args = {
  mapProps: {
    style: 'height: inherit',
    loadTilesWhileAnimating: true,
    loadTilesWhileInteracting: true,
  },
  viewProps: {
    projection: 'EPSG:3857',
    maxZoom: 20,
    minZoom: 4,
  },
  geolocationEnabled: true,
}
</script>

<style>
#storybook-root {
  height: inherit;
}
body,
html,
.map-wrap,
#app {
  height: 100% !important;
}
</style>
`;

export const normalizeCode = `<template>
  <div style="height: 100%" class="map-wrap"><su-map v-bind="args" /></div>
</template>

<script setup>
const args = {
  mapProps: {
    style: 'height: inherit',
    loadTilesWhileAnimating: true,
    loadTilesWhileInteracting: true,
  },
  viewProps: {
    projection: 'EPSG:3857',
    maxZoom: 20,
    minZoom: 4,
  },
}
</script>

<style>
#storybook-root {
  height: inherit;
}
body,
html,
.map-wrap,
#app {
  height: 100% !important;
}
</style>
`;
