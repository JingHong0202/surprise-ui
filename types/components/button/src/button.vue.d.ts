import { type StyleValue } from 'vue';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 按钮类型 */
    type?: "" | "primary" | "success" | "warning" | "danger" | "error" | "info" | undefined;
    /** 自定义按钮样式 */
    customStyle?: StyleValue | undefined;
    /** 按钮标题 */
    label?: string | undefined;
    /** 是否禁用 */
    disabled?: boolean | undefined;
    /** 背景是否透明 */
    plain?: boolean | undefined;
    /** 转换成椭圆形按钮 */
    round?: boolean | undefined;
}>, {
    disabled: boolean;
    type: string;
    plain: boolean;
    round: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onClick: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 按钮类型 */
    type?: "" | "primary" | "success" | "warning" | "danger" | "error" | "info" | undefined;
    /** 自定义按钮样式 */
    customStyle?: StyleValue | undefined;
    /** 按钮标题 */
    label?: string | undefined;
    /** 是否禁用 */
    disabled?: boolean | undefined;
    /** 背景是否透明 */
    plain?: boolean | undefined;
    /** 转换成椭圆形按钮 */
    round?: boolean | undefined;
}>, {
    disabled: boolean;
    type: string;
    plain: boolean;
    round: boolean;
}>>> & {
    onOnClick?: (() => any) | undefined;
}, {
    type: "" | "primary" | "success" | "warning" | "danger" | "error" | "info";
    disabled: boolean;
    plain: boolean;
    round: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
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
    };
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
