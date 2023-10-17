import { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { SuMap, SuInteraction } from '@ui/index';
import car from '@ui/components/su-map/src/static/car.png';
import OlLayerSwitchControl from '@ui/components/su-map/src/vue-openlayers/OlLayerSwitcherControl.vue';
import { animationPath } from '@packages/utils/runtime/map/ol/animation';
import { Icon, Style } from 'ol/style';
import { Point } from 'ol/geom';
import { Feature } from 'ol';
import { action } from '@storybook/addon-actions';
import { ref, nextTick, shallowRef, provide } from 'vue';
import { geolocationCode, normalizeCode, pathCode, drawCode } from './codes';

const meta = {
  component: SuMap,
  tags: ['autodocs'],
  argTypes: {
    drawType: {
      options: ['Point', 'LineString', 'Polygon', 'Circle'],
      control: { type: 'select' }
    }
  }
  // decorators: [withActions]
} satisfies Meta<typeof SuMap>;

export default meta;

export const normalize: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      setup() {
        const style = document.createElement('style');
        style.textContent = ` #storybook-root {
          height: inherit;
        }
        #storybook-root .map-wrap{
          height: inherit !important;
        }
        `;
        document.head.appendChild(style);
        return {
          args
        };
      },
      components: { SuMap },
      template: `
      <div class="map-wrap" style="height:400px;"><su-map  v-bind='args' >
      </su-map></div>`
    };
  },
  args: {
    mapProps: {
      style: 'height: inherit',
      loadTilesWhileAnimating: true,
      loadTilesWhileInteracting: true
    },
    viewProps: {
      projection: 'EPSG:3857',
      maxZoom: 20,
      minZoom: 4
    }
  },
  parameters: {
    playroom: {
      code: normalizeCode
    },
    docs: {
      source: {
        code: normalizeCode
      }
    }
  }
};

export const geoloaction: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      setup() {
        const style = document.createElement('style');
        style.textContent = ` #storybook-root {
          height: inherit;
        }
        #storybook-root .map-wrap{
          height: inherit !important;
        }
        `;
        document.head.appendChild(style);

        return {
          args,
          // @ts-ignore
          action: action()
        };
      },
      components: { SuMap },
      template: `
      <div class="map-wrap" style="height:400px;"><su-map @geoloc-error="(e) => action(e)" v-bind='args' >
      </su-map></div>`
    };
  },
  args: {
    mapProps: {
      style: 'height: inherit',
      loadTilesWhileAnimating: true,
      loadTilesWhileInteracting: true
    },
    viewProps: {
      projection: 'EPSG:3857'
    },
    geolocationEnabled: true
  },
  parameters: {
    playroom: {
      code: geolocationCode
    },
    docs: {
      source: {
        code: geolocationCode
      }
    }
  }
};

export const draw: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      setup() {
        const style = document.createElement('style');
        style.textContent = ` #storybook-root {
          height: inherit;
        }
        #storybook-root .map-wrap{
          height: inherit !important;
        }
        `;
        document.head.appendChild(style);
        // const suMapRef = ref();
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
                    [-1022421.6903425176, 19567.879241005518]
                  ]
                ]
              },
              properties: null
            }
          ]
        };
        return {
          args,
          geojsonObject
          // suMapRef,
        };
      },
      components: { SuMap, SuInteraction },
      template: `
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
      <div class="map-wrap" style="height:400px;">
      <su-map ref='suMapRef'  v-bind='args' >
       <su-interaction  :draw-enabled="args.drawEnabled"
      :modify-enabled="args.modifyEnabled"
      :select-enabled="args.selectEnabled" :modify-options="args.modifyOptions" :select-options="args.selectOptions"  :geojsonObject="geojsonObject" :draw-options="args.drawOptions" />
      </su-map>
      </div>`
    };
  },
  args: {
    mapProps: {
      style: 'height: inherit',
      loadTilesWhileAnimating: true,
      loadTilesWhileInteracting: true
    },
    viewProps: {
      projection: 'EPSG:3857'
    },
    geolocationEnabled: false,
    selectEnabled: true,
    drawEnabled: true,
    modifyEnabled: true,
    drawOptions: {
      type: 'Polygon'
    },
    modifyOptions: {
      wrapX: false
    }
  },
  parameters: {
    playroom: {
      code: drawCode
    },
    docs: {
      source: {
        code: drawCode
      }
    }
  }
};

export const path: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      setup() {
        const style = document.createElement('style');
        style.textContent = ` #storybook-root {
          height: inherit;
        }
        #storybook-root .map-wrap{
          height: inherit !important;
        }
        `;
        document.head.appendChild(style);
        const suMapRef = ref<InstanceType<typeof SuMap>>();
        const featureRef = ref<InstanceType<typeof SuInteraction>>();
        const selected = ref([]);
        const controller = ref();
        const playing = ref(false);
        const reverse = ref(false);
        const repeat = ref(0);
        const duration = ref(5000);
        const speed = ref(0);
        const animation = ref();
        const point = ref(new Feature(new Point([])));
        const icon = new Icon({
          anchor: [0.5, 20],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          opacity: 1,
          rotateWithView: false,
          src: car as string
        });
        icon.load();
        point.value.setStyle(
          new Style({
            image: icon
          })
        );

        return {
          args,
          point,
          selected,
          suMapRef,
          playing,
          controller,
          reverse,
          duration,
          repeat,
          speed,
          featureRef,
          select(event: any, selectFeature: any) {
            selected.value = selectFeature
              .getArray()
              .filter(
                (feature: Feature) =>
                  feature.getGeometry()!.getType() === 'LineString'
              );
          },
          stop() {
            controller.value.stop();
            playing.value = false;
          },
          changeSpeed() {
            // debugger;
            animation.value.duration_ =
              animation.value.dist_ / (animation.value.speed_ += 500);
          },
          reset() {
            controller.value = null;
            playing.value = false;
            // console.log(
            //   suMapRef.value!.featureRef!.interface.source.getFeatures()
            // );
            // @ts-ignore
            args.selectEnabled = true;
            // @ts-ignore
            args.modifyEnabled = true;
          },
          async start() {
            // @ts-ignore
            // args.selectEnabled = false;
            // @ts-ignore
            args.modifyEnabled = false;
            if (controller.value && !controller.value.isPlaying()) {
              playing.value = true;
              controller.value.start();
              return;
            }
            playing.value = true;

            await animationPath({
              map: suMapRef.value!.mapRef!.map,
              layer: featureRef.value!.interface.layer,
              pathFeature: selected.value[0],
              pointFeature: point.value as Feature<Point>,
              pathOptions: {
                duration: duration.value,
                speed: speed.value,
                fade(p0) {
                  return 1;
                }
              },
              reverse: reverse.value,
              repeat: repeat.value,
              animationEndCallback() {
                controller.value = null;
                playing.value = false;
                // console.log(
                //   suMapRef.value!.featureRef!.interface.source.getFeatures()
                // );
                // @ts-ignore
                // args.selectEnabled = true;
                // @ts-ignore
                args.modifyEnabled = true;
              },
              updateController(e, a) {
                controller.value = e;
                animation.value = a;
              },
              rotate: -90
            });
          }
        };
      },
      mounted() {
        this.suMapRef.geojsonObject = {
          type: 'FeatureCollection',
          features: []
        };
        nextTick(() => {
          this.featureRef!.interface.source.addFeature(this.point);
          // console.log(
          //   this.suMapRef.featureRef!.interface.source.getFeatures(),
          //   this.suMapRef.featureRef!.interface.source
          // );
        });
      },
      components: { SuMap, SuInteraction },
      template: `
       <button  style="margin-right:20px"   :disabled='selected.length !== 1'  @click="controller && playing ? stop() : start()" >{{playing ? 'stop' : 'start'}}</button>   
        <label for="draw" style="margin-right: 10px">Draw</label> 
      <input
        type="checkbox"
        style="margin-right: 10px"
        id="draw"
        v-model="args.drawEnabled"
      />
      <label for="reverse" >Reverse</label> 
      <input
        type="checkbox"
        style="margin-right: 30px"
        id="reverse"
        v-model="reverse"
      />
      <label for="repeat">repeat</label>:
      <input
        type="number"
        style="margin-right: 10px;width:50px"
        id="repeat"
        v-model="repeat"
      />
      <label for="duration" style="margin-right: 10px">duration</label>:
      <input
        type="number"
        style="margin-right: 10px;width:50px"
        step="1000"
        id="duration"
        v-model="duration"
        :disabled="speed > 0"
      />
       <label for="duration" style="margin-right: 10px">speed</label>:
      <input
        type="number"
        style="margin-right: 10px;width:50px"
        step="100"
        id="speed"
        v-model="speed"
      />
       <button @click='reset' :disabled="playing">reset</button>
        <div class="map-wrap" style="height:400px;"><su-map ref='suMapRef'  v-bind='args' >
        <su-interaction @select-change="select"  ref='featureRef' :draw-enabled="args.drawEnabled"
      :modify-enabled="args.modifyEnabled"
      :select-enabled="args.selectEnabled" :modify-options="args.modifyOptions" :select-options="args.selectOptions"  :geojsonObject="geojsonObject" :draw-options="args.drawOptions"  />
      </su-map></div>`
    };
  },
  args: {
    mapProps: {
      style: 'height: inherit',
      loadTilesWhileAnimating: true,
      loadTilesWhileInteracting: true
    },
    viewProps: {
      projection: 'EPSG:3857'
      // center: [-102.13121, 40.2436]
    },
    geolocationEnabled: false,
    selectEnabled: true,
    modifyEnabled: true,
    drawEnabled: false,
    drawOptions: {
      type: 'LineString'
    },
    // selectOptions: {hitTolerance:100},
    modifyOptions: {
      wrapX: false
    }
  },
  parameters: {
    playroom: {
      code: pathCode
    },
    docs: {
      source: {
        code: pathCode
      }
    }
  }
};

export const layersManager: StoryObj<typeof meta> = {
  render: (args: ArgTypes) => {
    return {
      setup() {
        const style = document.createElement('style');
        style.textContent = ` #storybook-root {
          height: inherit;
        }
        #storybook-root .map-wrap{
          height: inherit !important;
        }
        `;
        document.head.appendChild(style);
        const suMapRef = ref();
        const featureRef = ref();
        const selectLayer = shallowRef();
        const current = shallowRef();
        const styleControl = shallowRef({
          fill: {
            color: 'transparent'
          },
          stroke: {
            color: 'transparent',
            width: 1
          }
        });
        provide('style', styleControl);
        return {
          styleControl,
          args,
          suMapRef,
          current,
          featureRef,
          layerManager: ref(),
          drawlist(e: any) {
            if (e.layer.get('name') === 'base layer') return;
            const minZoomControl = document.createElement('div');
            const MaxZoomControl = document.createElement('div');
            MaxZoomControl.textContent = 'e';
            minZoomControl.textContent = '-e';
            const find = args.layers.find(
              layer => layer._id === e.layer.ol_uid
            );
            MaxZoomControl.onclick = () => {
              find.layerOptions.maxZoom = suMapRef.value.mapRef.map
                .getView()
                .getZoom();
            };
            minZoomControl.onclick = () => {
              find.layerOptions.minZoom = suMapRef.value.mapRef.map
                .getView()
                .getZoom();
            };
            e.li.children[0].appendChild(minZoomControl);
            e.li.children[0].appendChild(MaxZoomControl);
          },
          change(newVal: any) {
            args.geojsonObject = newVal;
          },
          selectLayer(e: any) {
            selectLayer.value = e.layer;
            if (current.value) {
              current.value.modifyEnabled = false;
              current.value.drawEnabled = false;
              current.value.selectEnabled = false;
            }
            current.value = args.layers.find(
              layer => layer._id === e.layer.ol_uid
            );
            // args.layers[1].layerOptions.style = () => {
            //   return new Style({ stroke: new Stroke({ color: 'green' }) });
            //   debugger;
            // };
          }
        };
      },
      mounted() {
        const add = document.createElement('button');
        const exportFeatures = document.createElement('button');
        exportFeatures.textContent = 'export';
        exportFeatures.style =
          'width:80px;background: var(--su-color-primary);color:white';
        exportFeatures.onclick = () => {
          console.log(
            this.featureRef.map(item => {
              const find = JSON.parse(
                JSON.stringify(
                  args.layers.find(
                    layer => layer._id === item.interface.layer.ol_uid
                  )
                )
              );
              find.geojsonObject = item.exportFeatures();
              return find;
            })
          );
        };
        add.textContent = 'layer Add ';
        add.style =
          'width:80px;background: var(--su-color-primary);color:white';
        add.onclick = () => {
          let title;
          if ((title = window.prompt('请输入图层名称'))) {
            args.layers.push({
              selectEnabled: false,
              drawEnabled: false,
              modifyEnabled: false,
              drawOptions: {
                type: 'Polygon'
              },
              modifyOptions: {
                wrapX: false
              },
              layerOptions: {
                title
              },
              geojsonObject: {
                type: 'FeatureCollection',
                features: []
              }
            });
          }
        };
        this.layerManager.control.setHeader(add);
        this.layerManager.control.setHeader(exportFeatures);
      },
      components: { SuMap, OlLayerSwitchControl, SuInteraction },
      template: `
       <input
        type="checkbox"
        id="checkbox-select"
        v-model="current.selectEnabled"
        v-if="current"
        style="margin-right: 10px"
      />
      <label   v-if="current" for="checkbox" style="margin-right: 10px">Select</label>
      <input
        type="checkbox"
        id="checkbox-draw"
        v-if="current"
        v-model="current.drawEnabled"
        style="margin-right: 10px"
      />
      <label  v-if="current" for="checkbox" style="margin-right: 10px">Draw</label>

      <input
        type="checkbox"
        style="margin-right: 10px"
        id="checkbox-modify"
         v-if="current"
        v-model="current.modifyEnabled"
      />
      <label  v-if="current" for="checkbox" style="margin-right: 10px">Modify</label>
       <label  v-if="current" for="checkbox" style="margin-right: 10px">Type:</label>
      <select   v-if="current" id="type" v-model="current.drawOptions.type" style="margin-right: 10px">
        <option value="Point">Point</option>
        <option value="LineString">LineString</option>
        <option value="Polygon">Polygon</option>
        <option value="Circle">Circle</option>
      </select><br/>
      <div v-if="current">
         <label  v-if="current"  style="margin-right: 10px">stroke-color</label>
          <input
            type="text"
            style="margin-right: 10px"
            v-model="styleControl.stroke.color"
          />
            <label  v-if="current"  style="margin-right: 10px">stroke-width</label>
          <input
            type="number"
            style="margin-right: 10px"
            v-model="styleControl.stroke.width"
          />
            <label  v-if="current"  style="margin-right: 10px">fill-color</label>
          <input
            type="text"
            style="margin-right: 10px"
            v-model="styleControl.fill.color"
          />
      </div>
      <div class="map-wrap" style="height:400px;">
      <su-map  ref='suMapRef' v-bind='args' >
       <su-interaction   ref='featureRef' @set-id="id => layer._id = id"  v-for="(layer,index) in args.layers" :key="index" v-bind="layer" />
        <ol-layer-switch-control @select="selectLayer" @drawlist="drawlist"  :selection="true" ref="layerManager"  :show_progress="true"
      :extent="true"
      :trash="true"/>
      </su-map>
      </div>`
    };
  },
  args: {
    mapProps: {
      style: 'height: inherit',
      loadTilesWhileAnimating: true,
      loadTilesWhileInteracting: true
    },
    viewProps: {
      projection: 'EPSG:3857'
      // center: [-102.13121, 40.2436]
    },
    geolocationEnabled: false,
    layerOptions: {
      baseLayer: true,
      name: 'base layer',
      noSwitcherDelete: true,
      displayInLayerSwitcher: true
    },
    layers: []
  },
  parameters: {
    //     playroom: {
    //       code: `<template>
    //   <su-button type="primary">button</su-button>
    // </template>`
    //     }
  }
};
