<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading" :style="loadStyle" :class="loadClass">
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
  width: 32px;
  height: 32px;
}

.loading > div {
  width: 100%;
  height: 100%;
  border-radius: 0;
  animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
}

.loading.la-sm {
  width: 16px;
  height: 16px;
}

.loading.la-2x {
  width: 64px;
  height: 64px;
}

.loading.la-3x {
  width: 96px;
  height: 96px;
}

@keyframes square-spin {
  0% {
    transform: perspective(100px) rotateX(0) rotateY(0);
  }

  25% {
    transform: perspective(100px) rotateX(180deg) rotateY(0);
  }

  50% {
    transform: perspective(100px) rotateX(180deg) rotateY(180deg);
  }

  75% {
    transform: perspective(100px) rotateX(0) rotateY(180deg);
  }

  100% {
    transform: perspective(100px) rotateX(0) rotateY(360deg);
  }
}
</style>
