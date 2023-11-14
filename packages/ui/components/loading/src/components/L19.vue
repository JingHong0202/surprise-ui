<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading" :style="loadStyle" :class="loadClass">
      <div></div>
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
  width: 120px;
  height: 10px;
  font-size: 0;
  text-align: center;
}

.loading > div {
  display: inline-block;
  width: 10px;
  height: 10px;
  white-space: nowrap;
  border-radius: 100%;
  animation: ball-elastic-dots-anim 1s infinite;
}

@keyframes ball-elastic-dots-anim {
  0%,
  100% {
    margin: 0;
    transform: scale(1);
  }

  50% {
    margin: 0 5%;
    transform: scale(0.65);
  }
}
</style>
