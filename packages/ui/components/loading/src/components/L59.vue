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
  width: 50px;
  height: 50px;
  display: inline-block;
  padding: 0px;
  opacity: 0.5;
  border: 3px solid #000;
  animation: loading-animation 1s ease-in-out infinite alternate;
}

.loading:before {
  content: ' ';
  position: absolute;
  z-index: -1;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border: 3px solid #000;
}

.loading:after {
  content: ' ';
  position: absolute;
  z-index: -1;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border: 3px solid #000;
}

@keyframes loading-animation {
  from {
    transform: rotate(0deg) scale(1, 1);
    border-radius: 0px;
  }

  to {
    transform: rotate(360deg) scale(0, 0);
    border-radius: 50px;
  }
}
</style>
