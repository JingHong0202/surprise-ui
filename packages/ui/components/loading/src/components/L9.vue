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
  margin: 20px;
  position: relative;
  width: 1px;
  height: 1px;
}

.loading:before,
.loading:after {
  position: absolute;
  display: inline-block;
  width: 15px;
  height: 15px;
  content: '';
  border-radius: 100%;
  background-color: #000;
}

.loading:before {
  left: -15px;
  animation: ball-pulse infinite 0.75s -0.4s cubic-bezier(0.2, 0.68, 0.18, 1.08);
}

.loading:after {
  right: -15px;
  animation: ball-pulse infinite 0.75s cubic-bezier(0.2, 0.68, 0.18, 1.08);
}

@keyframes ball-pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(0.1);
    opacity: 0.6;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
