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
  width: 20px;
  height: 12px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  color: #ddd;
  background: currentColor;
  animation: loading-animation 0.6s 0.3s ease infinite alternate;
}

.loading::after,
.loading::before {
  content: '';
  width: 20px;
  height: 12px;
  background: currentColor;
  position: absolute;
  border-radius: 4px;
  top: 0;
  right: 110%;
  animation: loading-animation 0.6s ease infinite alternate;
}

.loading::after {
  left: 110%;
  right: auto;
  animation-delay: 0.6s;
}

@keyframes loading-animation {
  0% {
    width: 20px;
  }

  100% {
    width: 48px;
  }
}
</style>
