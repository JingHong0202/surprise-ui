<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading" :style="loadStyle" :class="loadClass">
      <div></div>
      <div></div>
      <div></div>
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
.loading,
.loading > div {
  position: relative;
  box-sizing: border-box;
}

.loading {
  display: block;
  font-size: 0;
  color: #000;
}

.loading.la-dark {
  color: #333;
}

.loading > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}

.loading {
  width: 54px;
  height: 18px;
}

.loading > div {
  width: 10px;
  height: 10px;
  margin: 4px;
  border-radius: 100%;
  animation: ball-pulse-sync 0.6s infinite ease-in-out;
}

.loading > div:nth-child(1) {
  animation-delay: -0.14s;
}

.loading > div:nth-child(2) {
  animation-delay: -0.07s;
}

.loading > div:nth-child(3) {
  animation-delay: 0s;
}

.loading.la-sm {
  width: 26px;
  height: 8px;
}

.loading.la-sm > div {
  width: 4px;
  height: 4px;
  margin: 2px;
}

.loading.la-2x {
  width: 108px;
  height: 36px;
}

.loading.la-2x > div {
  width: 20px;
  height: 20px;
  margin: 8px;
}

.loading.la-3x {
  width: 162px;
  height: 54px;
}

.loading.la-3x > div {
  width: 30px;
  height: 30px;
  margin: 12px;
}

@keyframes ball-pulse-sync {
  33% {
    transform: translateY(100%);
  }

  66% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
