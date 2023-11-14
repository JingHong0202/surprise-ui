<template>
  <su-mask v-bind="maskProps">
    <slot>
      <div class="loading-wrap" :class="alignment">
        <loading
          v-if="loading"
          :loadStyle="loadingStyle"
          :loadClass="loadingClass" />
        <span class="loading-desc" v-if="title !== undefined">{{ title }}</span>
      </div>
    </slot>
  </su-mask>
</template>

<script lang="ts" setup>
import { SuMask } from '../../mask';
import { StyleValue, ref, onMounted } from 'vue';
defineOptions({ name: 'su-loading' });

const loading = ref();
const props = withDefaults(
  defineProps<{
    /**
     * loading样式范围：1-117
     */
    type?: number;
    /**
     * 标题
     */
    title?: string;
    /**
     * loading style
     */
    loadingStyle?: StyleValue | undefined;
    /**
     * loading class
     */
    loadingClass?: StyleValue | undefined;
    /**
     * mask props
     */
    maskProps?: InstanceType<typeof SuMask>['$props'];
    /**
     * 对齐
     */
    alignment?: 'to-bottom' | 'to-left' | 'to-right' | 'to-top';
    /**
     * loading 与 标题之间的间距
     */
    spac?: string;
  }>(),
  {
    title: '',
    maskProps: () => ({
      fullScreen: false
    }),
    alignment: 'to-bottom',
    spac: '20px'
  }
);
onMounted(async () => {
  /* @vite-ignore */
  loading.value = (
    await import(
      `./components/L${
        props.type === undefined || props.type <= 0 || props.type > 117
          ? 1
          : props.type
      }.vue`
    )
  ).default;
});
</script>

<style scoped lang="scss">
.loading-wrap {
  display: flex;
  align-items: center;
}
.to-bottom {
  flex-direction: column;
  .loading-desc {
    margin-top: v-bind(spac);
  }
}
.to-top {
  flex-direction: column-reverse;
  .loading-desc {
    margin-bottom: v-bind(spac);
  }
}
.to-left {
  flex-direction: row-reverse;
  .loading-desc {
    margin-right: v-bind(spac);
  }
}
.to-right {
  flex-direction: row;
  .loading-desc {
    margin-left: v-bind(spac);
  }
}
</style>
