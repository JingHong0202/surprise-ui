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
  height: 48px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  left: -40px;
  animation: loading-animation 1s linear infinite alternate;
}

@keyframes loading-animation {
  0% {
    box-shadow: 20px 0 rgba(255, 255, 255, 0.25), 40px 0 #ddd, 60px 0 #ddd;
  }

  50% {
    box-shadow: 20px 0 #ddd, 40px 0 rgba(255, 255, 255, 0.25), 60px 0 #ddd;
  }

  100% {
    box-shadow: 20px 0 #ddd, 40px 0 #ddd, 60px 0 rgba(255, 255, 255, 0.25);
  }
}
</style>
