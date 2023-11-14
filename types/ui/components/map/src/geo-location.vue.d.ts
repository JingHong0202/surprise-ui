/** __vue_virtual_code_placeholder */
import type { ObjectEvent } from 'ol/Object';
import { type GeolocationError } from 'ol/Geolocation';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    auto?: boolean | undefined;
}>, {}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (arg: ObjectEvent) => void;
    error: (arg: GeolocationError) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    auto?: boolean | undefined;
}>, {}>>> & {
    onChange?: ((arg: ObjectEvent) => any) | undefined;
    onError?: ((arg: GeolocationError) => any) | undefined;
}, {}, {}>, Partial<Record<"default", (_: {
    position: number[] | undefined;
}) => any>>>;
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
