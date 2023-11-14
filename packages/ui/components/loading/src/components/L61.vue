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
  width: 25px;
  height: 25px;
  display: inline-block;
  padding: 0px;
  border-radius: 100%;
  border: 5px solid;
  border-top-color: rgba(254, 168, 23, 0.65);
  border-bottom-color: rgba(57, 154, 219, 0.65);
  border-left-color: rgba(188, 84, 93, 0.95);
  border-right-color: rgba(137, 188, 79, 0.95);
  animation: loading-animation 2s ease-in-out infinite alternate;
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
