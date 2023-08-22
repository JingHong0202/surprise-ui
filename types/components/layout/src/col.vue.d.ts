declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    push: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
    span: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
    offset: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
    pull: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    push: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
    span: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
    offset: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
    pull: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
}>>, {
    push: number;
    span: number;
    offset: number;
    pull: number;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
