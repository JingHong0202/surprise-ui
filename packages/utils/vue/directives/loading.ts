import { getProtoType } from '@packages/utils/runtime/common';
import { Directive, VNode, VNodeProps, cloneVNode } from 'vue';
import create, {
  mount,
  Options,
  unMount
} from '@ui/components/loading/src/service';

export const vLoading: Directive<Element, Options> = {
  mounted(el: Element & { $loading_vm?: VNode }, binding) {
    el.$loading_vm = create(binding?.value || {});
    if (
      (getProtoType(binding.value) === '[object Object]' &&
        binding.value.show) ||
      (getProtoType(binding.value) === '[object Boolean]' && binding.value)
    ) {
      mount(el.$loading_vm, el);
    }
  },
  updated(el: Element & { $loading_vm?: VNode }, binding) {
    if (
      getProtoType(binding.value) === '[object Object]' &&
      binding.value?.show
    ) {
      mount(cloneVNode(el.$loading_vm!, binding.value as VNodeProps), el);
    } else if (getProtoType(binding.value) === '[object Boolean]') {
      binding.value ? mount(el.$loading_vm!, el) : unMount(el);
    } else {
      unMount(el);
    }
  }
};
