<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading" :style="loadStyle" :class="loadClass">Loading</div>
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
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #ff3d00;
  letter-spacing: 2px;
  position: relative;
}

.loading::after {
  content: 'Loading';
  position: absolute;
  left: 0;
  top: 0;
  color: #ddd;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: loading-animation 10s ease-in infinite;
}

@keyframes loading-animation {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}
</style>
