<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading" :style="loadStyle" :class="loadClass"></div>
  </div>
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue';
withDefaults(
  defineProps<{ loadClass?: string; loadStyle?: StyleValue | undefined }>(),
  {
    loadStyle: '',
    loadClass: ''
  }
);
</script>

<style lang="scss" scoped>
.loading {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  border-bottom: 2px solid #000;
  border-top: 2px solid #000;
  animation: loading-animation 1.8s ease-in-out infinite alternate;
}

.loading:before {
  content: ' ';
  position: absolute;
  z-index: -1;
  top: 5px;
  left: 0px;
  right: 0px;
  bottom: 5px;
  border-left: 2px solid #000;
  border-right: 2px solid #000;
}

@keyframes loading-animation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(720deg);
  }
}
</style>
