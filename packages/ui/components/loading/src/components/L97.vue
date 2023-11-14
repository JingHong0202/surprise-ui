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
  width: 8px;
  height: 40px;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  background: currentColor;
  color: #ddd;
  animation: loading-animation-m 0.3s 0.3s linear infinite alternate;
}

.loading::after,
.loading::before {
  content: '';
  width: 8px;
  height: 40px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  bottom: 0;
  left: 20px;
  animation: loading-animation 0.3s 0.45s linear infinite alternate;
}

.loading::before {
  left: -20px;
  animation-delay: 0s;
}

@keyframes loading-animation-m {
  0% {
    height: 40px;
    transform: translateY(0);
  }

  100% {
    height: 10px;
    transform: translateY(30px);
  }
}

@keyframes loading-animation {
  0% {
    height: 48px;
  }

  100% {
    height: 4.8px;
  }
}
</style>
