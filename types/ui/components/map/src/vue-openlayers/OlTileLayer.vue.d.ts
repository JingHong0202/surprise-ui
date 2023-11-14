/** __vue_virtual_code_placeholder */
import TileLayer from 'ol/layer/Tile.js';
import { type LayersCommonProps } from './common/layers';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<LayersCommonProps & {
    preload?: number | undefined;
}>, {
    className: string;
    opacity: number;
    visible: boolean;
    properties: () => {};
    preload: number;
}>, {
    tileLayer: import("vue").ComputedRef<TileLayer<import("ol/source/Tile").default>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<LayersCommonProps & {
    preload?: number | undefined;
}>, {
    className: string;
    opacity: number;
    visible: boolean;
    properties: () => {};
    preload: number;
}>>>, {
    properties: () => Record<string, any>;
    opacity: number;
    className: string;
    visible: boolean;
    preload: number;
}, {}>, Partial<Record<"default", (_: {}) => any>>>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
        $props: __VLS_PropsChildren<S>;
    };
};
type __VLS_PropsChildren<S> = {
    [K in keyof (boolean extends (JSX.ElementChildrenAttribute extends never ? true : false) ? never : JSX.ElementChildrenAttribute)]?: S;
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
