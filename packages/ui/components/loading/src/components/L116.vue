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
  font-size: 28px;
  letter-spacing: 2px;
  font-family: Arial, Helvetica, sans-serif;
  color: #666;
  animation: loading-animation 1s ease-in infinite alternate;
}

@keyframes loading-animation {
  0% {
    filter: blur(0px);
    transform: skew(0deg);
  }

  100% {
    filter: blur(3px);
    transform: skew(-4deg);
  }
}
</style>
