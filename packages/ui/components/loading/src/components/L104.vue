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
  width: 8px;
  height: 48px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  left: -60px;
  animation: loading-animation 1s linear infinite alternate;
}

@keyframes loading-animation {
  0% {
    box-shadow: 20px 0 rgba(255, 255, 255, 0), 40px 0 rgba(255, 255, 255, 0),
      60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0),
      100px 0 rgba(255, 255, 255, 0);
  }

  20% {
    box-shadow: 20px 0 #ddd, 40px 0 rgba(255, 255, 255, 0),
      60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0),
      100px 0 rgba(255, 255, 255, 0);
  }

  40% {
    box-shadow: 20px 0 #ddd, 40px 0 #ddd, 60px 0 rgba(255, 255, 255, 0),
      80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
  }

  60% {
    box-shadow: 20px 0 #ddd, 40px 0 #ddd, 60px 0 #ddd,
      80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
  }

  80% {
    box-shadow: 20px 0 #ddd, 40px 0 #ddd, 60px 0 #ddd, 80px 0 #ddd,
      100px 0 rgba(255, 255, 255, 0);
  }

  100% {
    box-shadow: 20px 0 #ddd, 40px 0 #ddd, 60px 0 #ddd, 80px 0 #ddd, 100px 0 #ddd;
  }
}
</style>
