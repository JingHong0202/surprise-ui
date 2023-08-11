<template>
  <svg v-if="type === 'symbol'" v-bind="$attrs" aria-hidden="true">
    <use :xlink:href="`#${name}`"></use>
  </svg>
  <i
    v-else
    v-bind="$attrs"
    :class="[type === 'font-class' && name, 'iconfont']">
    <template v-if="type === 'unicode'">
      {{ transformUnicode(name) }}
    </template>
  </i>
</template>

<script lang="ts" setup>
// import { ref, unref, watchEffect } from 'vue';
defineOptions({ name: 'icon-font' });
withDefaults(
  defineProps<{
    /** unicode、font-class symbol*/
    name: string;
    /** 图片类型*/
    type: 'unicode' | 'font-class' | 'symbol';
  }>(),
  {
    name: '',
    type: 'font-class'
  }
);
function transformUnicode(name: string) {
  if (/^[&#xe]/.test(name)) {
    return String.fromCharCode(parseInt(name.slice(3, -1), 16));
  } else {
    return name;
  }
}
</script>
