<template>
  <button
    class="su-button"
    :data-type="type"
    :style="{
      minWidth: rect[0],
      minHeight: rect[1],
      maxWidth: rect[2],
      maxHeight: rect[3],
      borderRadius: wrapStyle[0],
      border: wrapStyle[1]
    }">
    <!-- 
      @slot 按钮内容插槽
    -->
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script lang="ts" setup>
defineOptions({ name: 'su-button' });
const props = withDefaults(
  defineProps<{
    /** 按钮类型 */
    type: 'primary' | 'success' | 'warning' | 'danger' | 'error' | 'info';
    /** 按钮大小: minWidth、 minHeight、 maxWidth、 maxHeight */
    rect: [string, string, string?, string?];
    /** 按钮外部样式：borderRadius、 border */
    wrapStyle: [string, string];
    /** 按钮标题 */
    label?: string;
  }>(),
  {
    type: 'primary',
    rect: () => ['70px', '40px'],
    wrapStyle: () => ['5px', 'none']
  }
);
</script>

<style scoped lang="scss">
.su-button {
  border: none;
  &[data-type='primary'] {
    color: wrapVar(color-primary);
    background-color: wrapVar(button-bg-color);
  }
}
</style>
