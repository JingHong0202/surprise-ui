/** __vue_virtual_code_placeholder */
declare function reset(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 渲染数据数组 */
    data: any[];
    /** 子元素大小 */
    itemSize: number;
    /** 列表缓存，减少滚动太快出现空白 */
    buffer?: number | undefined;
    /** 设置数据 v-for key */
    keyName: string;
}>, {
    itemSize: number;
    buffer: number;
    keyName: string;
    data: () => never[];
}>, {
    reset: typeof reset;
    container: import("vue").Ref<HTMLDivElement | undefined>;
    _data: import("vue").Ref<any[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 渲染数据数组 */
    data: any[];
    /** 子元素大小 */
    itemSize: number;
    /** 列表缓存，减少滚动太快出现空白 */
    buffer?: number | undefined;
    /** 设置数据 v-for key */
    keyName: string;
}>, {
    itemSize: number;
    buffer: number;
    keyName: string;
    data: () => never[];
}>>>, {
    data: any[];
    itemSize: number;
    buffer: number;
    keyName: string;
}, {}>, Partial<Record<"default", (_: {
    slotScope: any;
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
