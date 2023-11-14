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
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #4183d7;
  border-top: 10px solid #f5ab35;
  animation: loading-animation 1.2s ease-in-out infinite alternate;
}

@keyframes loading-animation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(720deg);
  }
}
</style>
