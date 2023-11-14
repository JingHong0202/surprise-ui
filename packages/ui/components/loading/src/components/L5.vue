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
  position: relative;
  width: 40px;
  height: 40px;
}

.loading:before,
.loading:after {
  position: absolute;
  width: 10px;
  height: 10px;
  content: '';
  border-radius: 100%;
  background-color: #000;
}

.loading:before {
  transform: translate(0, 0);
  animation: ball-circle-before infinite 1.5s linear;
}

.loading:after {
  transform: translate(30px, 30px);
  animation: ball-circle-after infinite 1.5s linear;
}

@keyframes ball-circle-after {
  0% {
    transform: translate(30px, 30px);
  }

  25% {
    transform: translate(0, 30px);
  }

  50% {
    transform: translate(0, 0);
  }

  75% {
    transform: translate(30px, 0);
  }

  100% {
    transform: translate(30px, 30px);
  }
}

@keyframes ball-circle-before {
  0% {
    transform: translate(0, 0);
  }

  25% {
    transform: translate(30px, 0);
  }

  50% {
    transform: translate(30px, 30px);
  }

  75% {
    transform: translate(0, 30px);
  }

  100% {
    transform: translate(0, 0);
  }
}
</style>
