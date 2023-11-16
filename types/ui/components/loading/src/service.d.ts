import SuLoading from './loading.vue';
import { VNode, VNodeProps } from 'vue';
export type Options = InstanceType<typeof SuLoading>['$props'] & {
    show: boolean;
};
export default function create(options: Options): VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
export declare function mount(vm: VNode, mountEl?: Element): Element;
export declare function unMount(mountEl: Element): void;
export declare function service(options: Options, mountEl: Element): {
    vm: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    close: () => void;
    update: (newArgs: VNodeProps & Partial<Options>) => Element;
};
