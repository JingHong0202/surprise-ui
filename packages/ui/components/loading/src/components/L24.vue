<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading" :style="loadStyle" :class="loadClass">
      <div></div>
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
  width: 40px;
  height: 10px;
}

.loading > div {
  width: 10px;
  height: 10px;
  border-radius: 100%;
}

.loading > div:first-child {
  transform: translateX(0%);
  animation: ball-newton-cradle-left 1s 0s ease-out infinite;
}

.loading > div:last-child {
  transform: translateX(0%);
  animation: ball-newton-cradle-right 1s 0s ease-out infinite;
}

.loading.la-sm {
  width: 20px;
  height: 4px;
}

.loading.la-sm > div {
  width: 4px;
  height: 4px;
}

.loading.la-2x {
  width: 80px;
  height: 20px;
}

.loading.la-2x > div {
  width: 20px;
  height: 20px;
}

.loading.la-3x {
  width: 120px;
  height: 30px;
}

.loading.la-3x > div {
  width: 30px;
  height: 30px;
}

@keyframes ball-newton-cradle-left {
  25% {
    transform: translateX(-100%);
    animation-timing-function: ease-in;
  }

  50% {
    transform: translateX(0%);
  }
}

@keyframes ball-newton-cradle-right {
  50% {
    transform: translateX(0%);
  }

  75% {
    transform: translateX(100%);
    animation-timing-function: ease-in;
  }

  100% {
    transform: translateX(0%);
  }
}
</style>
