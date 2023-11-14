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
  bottom: 8px;
  height: 14px;
  width: 4px;
  outline: 1px solid #ddd;
  color: #ff3d00;
  animation: loading-animation-b 1s linear infinite alternate;
}

.loading::after {
  content: '';
  width: 4px;
  height: 4px;
  background: #ff3d00;
  position: absolute;
  right: 45px;
  top: 8px;
  animation: loading-animation-a 1s ease-out infinite alternate;
}

@keyframes loading-animation-b {
  0% {
    box-shadow: 0 0 inset;
  }

  100% {
    box-shadow: 0 -16px inset;
  }
}

@keyframes loading-animation-a {
  0% {
    top: 2px;
    transform: rotate(0deg) scale(1);
  }

  100% {
    top: -4px;
    transform: rotate(180deg) scale(1.5);
  }
}
</style>
