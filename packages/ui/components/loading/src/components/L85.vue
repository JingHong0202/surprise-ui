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
  border: 2px solid #ddd;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  animation: rotation 1s linear infinite;
}

.loading:after {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  background: #ff3d00;
  width: 3px;
  height: 24px;
  transform: translateX(-50%);
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
