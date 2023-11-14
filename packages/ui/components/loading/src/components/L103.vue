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
  width: 4.8px;
  height: 4.8px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  color: #ddd;
  background: currentColor;
  animation: loading-animation 0.3s 0.3s linear infinite alternate;
}

.loading::after,
.loading::before {
  content: '';
  width: 4.8px;
  height: 4.8px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15px;
  animation: loading-animation 0.3s 0.45s linear infinite alternate;
}

.loading::after {
  top: -15px;
  animation-delay: 0s;
}

@keyframes loading-animation {
  0% {
    width: 4.8px;
  }

  100% {
    width: 48px;
  }
}
</style>
