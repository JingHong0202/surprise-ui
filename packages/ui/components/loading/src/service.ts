import SuLoading from './loading.vue';
import { VNode, VNodeProps, cloneVNode, h, render } from 'vue';

export type Options = InstanceType<typeof SuLoading>['$props'] & {
  show: boolean;
};

export default function create(options: Options) {
  // eslint-disable-next-line
  const vm = h(SuLoading, options as VNodeProps);
  // render()
  return vm;
}

export function mount(
  vm: VNode,
  mountEl: Element = document.createElement('div')
) {
  render(vm, mountEl);
  return mountEl;
}

export function unMount(mountEl: Element) {
  render(null, mountEl);
}

export function service(options: Options, mountEl: Element) {
  const vm = create(options);
  mount(vm, mountEl);

  return {
    vm,
    close: () => unMount(mountEl),
    update: (newArgs: VNodeProps & Partial<Options>) =>
      mount(cloneVNode(vm, newArgs), mountEl)
  };
}
