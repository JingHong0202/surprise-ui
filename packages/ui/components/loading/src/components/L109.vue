<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading" :style="loadStyle" :class="loadClass">
      L &nbsp; ading
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
.loading {
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #ddd;
  position: relative;
}

.loading::before {
  content: '';
  position: absolute;
  left: 0.714285em;
  bottom: 0.214285em;
  width: 0.285714em;
  height: 0.285714em;
  border-radius: 50%;
  border: 0.142857em solid #ddd;
  border-bottom-color: #ff3d00;
  animation: rotation 0.6s linear infinite;
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
