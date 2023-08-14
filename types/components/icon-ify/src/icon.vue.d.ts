import { type IconifyIcon } from '@iconify/vue';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 是否使用在线模式，否则使用离线模式 */
    online?: boolean | undefined;
    /** icon 名称 */
    name: string | IconifyIcon;
    /** 改变垂直对齐方式 */
    inline?: boolean | undefined;
    /** icon 宽度 */
    width?: string | number | undefined;
    /** icon 高度 */
    height?: string | number | undefined;
    /** horizontal: 水平翻转  vertical： 垂直翻转 */
    filp?: string | undefined;
    /** 旋转图标 默认：0° 1：90° 2：1802° 3：270°*/
    rotate?: number | undefined;
    /** 图标颜色  */
    color?: string | undefined;
    /** 图标加载前调用的回调函数  */
    onLoad?: (() => void) | undefined;
}>, {
    online: boolean;
    width: number;
    height: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 是否使用在线模式，否则使用离线模式 */
    online?: boolean | undefined;
    /** icon 名称 */
    name: string | IconifyIcon;
    /** 改变垂直对齐方式 */
    inline?: boolean | undefined;
    /** icon 宽度 */
    width?: string | number | undefined;
    /** icon 高度 */
    height?: string | number | undefined;
    /** horizontal: 水平翻转  vertical： 垂直翻转 */
    filp?: string | undefined;
    /** 旋转图标 默认：0° 1：90° 2：1802° 3：270°*/
    rotate?: number | undefined;
    /** 图标颜色  */
    color?: string | undefined;
    /** 图标加载前调用的回调函数  */
    onLoad?: (() => void) | undefined;
}>, {
    online: boolean;
    width: number;
    height: number;
}>>>, {
    height: string | number;
    width: string | number;
    online: boolean;
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
