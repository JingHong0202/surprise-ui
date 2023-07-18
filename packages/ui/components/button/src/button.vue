<template>
  <button
    class="su-button"
    :class="{ round }"
    :data-type="type"
    :data-plain="plain"
    :style="customStyle"
    @click="emit('onClick')"
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
  (event: 'onClick'): void;
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
    type: 'primary',
    plain: false,
    round: false
  }
);
</script>

<style scoped lang="scss">
@use '@ui/theme/colors.scss' as *;
@use '@ui/theme/utils.scss' as *;
@use 'sass:map';

.su-button {
  min-width: 90px;
  min-height: 35px;
  font-family: inherit;
  border-radius: wrapVar(button-border-radius);
  transition: all 150ms;
  font-size: 15px;
  font-weight: inherit;
  border: wrapVar(border);
  cursor: pointer;
  background-color: wrapVar(color-default);
  color: inherit;
  outline: none;
  &.round {
    border-radius: wrapVar(button-round-radius);
  }
  @each $type in $types {
    &[data-type='#{$type}'] {
      border: none;
      color: wrapVar(button-color);
      background-color: wrapVar('color-' + $type);
      // border: unquote('1px solid #{wrapVar( color- + $type + -5)}');
      &:hover,
      &:focus {
        opacity: 0.7;
      }
      &:active {
        box-shadow: 0 0 10px 5px wrapVar('color-' + $type + -7);
      }
      &[data-plain='true'] {
        background-color: wrapVar('color-' + $type + -9);
        border: unquote("1px solid #{wrapVar('color-' + $type)}");
        color: wrapVar('color-' + $type);
        &:hover {
          background-color: wrapVar('color-' + $type);
          // border: 1px solid wrapVar('color-' + $type);
          color: wrapVar('color-white');
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
