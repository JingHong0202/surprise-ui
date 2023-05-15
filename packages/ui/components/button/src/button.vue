<template>
  <button
    class="su-button"
    :class="{ round }"
    :data-type="type"
    :data-plain="plain"
    :style="customStyle"
    @click="emit('click')"
    :disabled="disabled">
    <!--  @slot 按钮内容插槽 -->
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script lang="ts" setup>
import { type StyleValue } from 'vue';

defineOptions({ name: 'su-button' });
const emit = defineEmits<{
  /** click event */
  (event: 'click'): void;
}>();
const props = withDefaults(
  defineProps<{
    /** 按钮类型 */
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'error' | 'info' | '';
    /** 自定义按钮样式 */
    customStyle?: StyleValue;
    /** 按钮标题 */
    label?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 背景是否透明 */
    plain?: boolean;
    /** 转换成椭圆形按钮 */
    round?: boolean;
  }>(),
  {
    disabled: false,
    type: '',
    plain: false,
    round: false
  }
);
</script>

<style scoped lang="scss">
@use '@ui/theme/colors.scss' as *;
@use 'sass:map';

.su-button {
  min-width: 90px;
  min-height: 35px;
  font-family: inherit;
  border-radius: wrapVar(button-border-radius);
  transition: all 150ms;
  font-size: 15px;
  font-weight: inherit;
  cursor: pointer;
  background-color: wrapVar(color-default);
  color: inherit;
  border: wrapVar(border);
  &:hover {
    background-color: wrapVar(color-primary-light-9);
    border: 1px solid wrapVar(color-primary);
    color: wrapVar(color-primary);
    &[data-plain='true'] {
      background-color: transparent;
    }
  }

  &.round {
    border-radius: wrapVar(button-round-radius);
  }
  @each $type in $types {
    &[data-type='#{$type}'] {
      color: wrapVar(button-color);
      background-color: wrapVar('color-' + $type);
      border: 1px solid + map.get($colors, $type, 'light-5');
      &:hover {
        opacity: 0.7;
      }
      &[data-plain='true'] {
        background-color: wrapVar('color-' + $type, light-9);
        border: 1px solid wrapVar('color-' + $type);
        color: wrapVar('color-' + $type);
        &:hover {
          background-color: wrapVar('color-' + $type);
          // border: 1px solid wrapVar('color-' + $type);
          color: wrapVar('color-default');
        }
      }
    }
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: wrapVar(button-disabled-opacity);
  }
}
</style>
