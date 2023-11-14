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
  height: 6px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  top: -30px;
  color: #ddd;
  animation: loading-animation 0.6s linear infinite;
}

@keyframes loading-animation {
  0% {
    box-shadow: -10px 20px, 10px 35px, 0px 50px;
  }

  25% {
    box-shadow: 0px 20px, 0px 35px, 10px 50px;
  }

  50% {
    box-shadow: 10px 20px, -10px 35px, 0px 50px;
  }

  75% {
    box-shadow: 0px 20px, 0px 35px, -10px 50px;
  }

  100% {
    box-shadow: -10px 20px, 10px 35px, 0px 50px;
  }
}
</style>
