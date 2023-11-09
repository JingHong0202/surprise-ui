<template>
  <template></template>
</template>
<script setup lang="ts">
import LayerSwitcher, { type Options } from 'ol-ext/control/LayerSwitcher';
import { onUnmounted, useAttrs } from 'vue';
import useControl from './composables/useControl';
import usePropsAsObjectProperties from './composables/usePropsAsObjectProperties';

interface ExtProps {
  selection?: boolean;
}

const props = withDefaults(defineProps<Options & ExtProps>(), {
  show_progress: false,
  mouseover: false,
  reordering: true,
  trash: false,
  collapsed: true,
  noScroll: false,
  selection: true
});

const attrs = useAttrs();
const { properties } = usePropsAsObjectProperties(props);
const { control } = useControl(LayerSwitcher, properties, attrs);
const emits = defineEmits<{
  (event: 'toggle', arg: any): void;
  (event: 'layer:visible', arg: any): void;
  (event: 'select', arg: any): void;
  (event: 'drawlist', arg: any): void;
}>();
// @ts-ignore
control.value.on('select', e => {
  emits('select', e);
});
control.value.on('toggle', e => {
  emits('toggle', e);
});
control.value.on('layer:visible', e => {
  emits('layer:visible', e);
});
control.value.on('layer:visible', e => {
  emits('layer:visible', e);
});
control.value.on('drawlist', e => {
  emits('drawlist', e);
});
defineExpose({
  control
});
onUnmounted(() => {
  control.value.dispose();
});
</script>
