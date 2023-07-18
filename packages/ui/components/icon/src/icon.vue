<template>
  <Icon
    :icon="name"
    :inline="inline"
    :width="width"
    :height="height"
    :flip="filp"
    :rotate="rotate"
    :color="color"
    :on-load="onLoad" />
</template>

<script lang="ts" setup>
import { Icon, type IconifyIcon, iconExists } from '@iconify/vue';
defineOptions({ name: 'icon' });
const props = withDefaults(
  defineProps<{
    /** 是否使用在线模式，否则使用离线模式 */
    online?: boolean;
    /** icon 名称 */
    name: string | IconifyIcon;
    /** 改变垂直对齐方式 */
    inline?: boolean;
    /** icon 宽度 */
    width?: string | number;
    /** icon 高度 */
    height?: string | number;
    /** horizontal: 水平翻转  vertical： 垂直翻转 */
    filp?: string;
    /** 旋转图标 默认：0° 1：90° 2：1802° 3：270°*/
    rotate?: number;
    /** 图标颜色  */
    color?: string;
    /** 图标加载前调用的回调函数  */
    onLoad?: () => void;
  }>(),
  {
    online: true,
    width: 16,
    height: 16
  }
);

if (!props.online && typeof props.name === 'string') {
  console.log(iconExists(props.name));
}

// function check(name: string) {}
</script>

<style scoped lang="scss"></style>
