<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading" :style="loadStyle" :class="loadClass">
      Load&nbsp;ng
    </div>
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
  color: #ddd;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  letter-spacing: 4px;
}

.loading::before {
  content: '';
  position: absolute;
  right: 45px;
  bottom: 7px;
  height: 14px;
  width: 3.5px;
  background: currentColor;
}

.loading::after {
  content: '';
  width: 4px;
  height: 4px;
  background: currentColor;
  position: absolute;
  right: 44.8px;
  animation: loading-animation 0.6s ease-out infinite alternate;
}

@keyframes loading-animation {
  0% {
    top: 6px;
    transform: rotate(0deg) scale(1);
  }

  100% {
    top: -2px;
    transform: rotate(180deg) scale(1.5);
  }
}
</style>
