<template>
  <button class="su-button" :data-type="type" :style="customStyle">
    <!--  @slot 按钮内容插槽 -->
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script lang="ts" setup>
import { type StyleValue } from 'vue';

defineOptions({ name: 'su-button' });
const props = withDefaults(
  defineProps<{
    /** 按钮类型 */
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'error' | 'info';
    /** 自定义按钮样式 */
    customStyle?: StyleValue;
    /** 按钮标题 */
    label?: string;
  }>(),
  {
    type: 'primary'
  }
);
</script>

<style scoped lang="scss">
@use '../../../theme/colors.scss' as *;
.su-button {
  border: none;
  min-width: 80px;
  min-height: 35px;
  border-radius: wrapVar(button-border-radius);
  transition: all 200ms;
  @each $type in $types {
    &[data-type='#{$type}'] {
      color: wrapVar(color-white);
      background-color: wrapVar('color-' + $type);
    }
  }
}
</style>
