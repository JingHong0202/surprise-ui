<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading" :style="loadStyle" :class="loadClass">
      Load&nbsp;ng
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
  display: inline-block;
  color: #ddd;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  letter-spacing: 0.083333em;
}

.loading::before {
  content: '';
  position: absolute;
  right: 1.458333em;
  bottom: 0.208333em;
  height: 0.583333em;
  width: 0.104166em;
  background: currentColor;
}

.loading::after {
  content: '';
  width: 0.16666em;
  height: 0.16666em;
  position: absolute;
  left: 2.62em;
  top: 0.041666em;
  border-radius: 50%;
  background: red;
  animation: loading-animation 1s ease-in infinite;
}

@keyframes loading-animation {
  0% {
    transform: translateY(0.16666em) scaleY(1) scaleX(1.25);
  }

  25%,
  75% {
    transform: translateY(-0.104166em) scaleY(1.2) scaleX(1);
  }

  50% {
    transform: translateY(-0.208333em) scaleY(1) scaleX(1);
  }

  100% {
    transform: translateY(0.16666em) scaleY(0.8) scaleX(0.8);
  }
}
</style>
