/** __vue_virtual_code_placeholder */
import LayerSwitcher, { type Options } from 'ol-ext/control/LayerSwitcher';
interface ExtProps {
    selection?: boolean;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Options & ExtProps>, {
    show_progress: boolean;
    mouseover: boolean;
    reordering: boolean;
    trash: boolean;
    collapsed: boolean;
    noScroll: boolean;
    selection: boolean;
}>, {
    control: import("vue").ComputedRef<LayerSwitcher>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    toggle: (arg: any) => void;
    "layer:visible": (arg: any) => void;
    select: (arg: any) => void;
    drawlist: (arg: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Options & ExtProps>, {
    show_progress: boolean;
    mouseover: boolean;
    reordering: boolean;
    trash: boolean;
    collapsed: boolean;
    noScroll: boolean;
    selection: boolean;
}>>> & {
    onSelect?: ((arg: any) => any) | undefined;
    onToggle?: ((arg: any) => any) | undefined;
    onDrawlist?: ((arg: any) => any) | undefined;
    "onLayer:visible"?: ((arg: any) => any) | undefined;
}, {
    mouseover: boolean;
    collapsed: boolean;
    show_progress: boolean;
    reordering: boolean;
    trash: boolean;
    noScroll: boolean;
    selection: boolean;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
