export type RowProps = typeof props;
declare const props: Omit<{
    /**  一行平均分成多少份,默认24 */
    cols: number;
}, "cols"> & {
    cols: number;
} & {};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    cols: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    cols: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
}>>, {
    cols: number;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
