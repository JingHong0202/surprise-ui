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
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}

.loading::after,
.loading::before {
  content: '';
  width: 48px;
  height: 48px;
  border: 2px solid #ddd;
  position: absolute;
  left: 0;
  top: 0;
  animation: rotation 2s ease-in-out infinite;
}

.loading::after {
  border-color: #ff3d00;
  animation-delay: 1s;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
