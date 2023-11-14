/** __vue_virtual_code_placeholder */
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * 背景颜色
     */
    bgColor?: string | undefined;
    /**
     * 是否全屏
     */
    fullScreen?: boolean | undefined;
    /**
     * 层级
     */
    zIndex?: number | undefined;
    /**
     * 对齐
     */
    alignment?: "center" | "left-center" | "right-center" | "center-top" | "center-bottom" | undefined;
}>, {
    bgColor: string;
    fullScreen: boolean;
    zIndex: number;
    alignment: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * 背景颜色
     */
    bgColor?: string | undefined;
    /**
     * 是否全屏
     */
    fullScreen?: boolean | undefined;
    /**
     * 层级
     */
    zIndex?: number | undefined;
    /**
     * 对齐
     */
    alignment?: "center" | "left-center" | "right-center" | "center-top" | "center-bottom" | undefined;
}>, {
    bgColor: string;
    fullScreen: boolean;
    zIndex: number;
    alignment: string;
}>>>, {
    bgColor: string;
    fullScreen: boolean;
    zIndex: number;
    alignment: "center" | "left-center" | "right-center" | "center-top" | "center-bottom";
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
