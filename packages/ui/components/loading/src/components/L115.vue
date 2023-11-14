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
  position: relative;
}

.loading::before {
  content: 'Loading';
  color: #666;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  letter-spacing: 2px;
  display: inline-block;
  animation: floating 1s ease-out infinite alternate;
}

.loading::after {
  content: '';
  width: 100%;
  height: 10px;
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  left: 0;
  top: 100%;
  filter: blur(4px);
  border-radius: 50%;
  animation: loading-animation 1s ease-out infinite alternate;
}

@keyframes floating {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-25px);
  }
}

@keyframes loading-animation {
  0% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1.2);
  }
}
</style>
