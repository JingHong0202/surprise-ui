declare function reset(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    data: {
        type: import("vue").PropType<any[]>;
        required: true;
        default: () => never[];
    };
    itemSize: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
    buffer: {
        type: import("vue").PropType<number>;
        default: number;
    };
    keyName: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
}, {
    reset: typeof reset;
    container: import("vue").Ref<HTMLDivElement | undefined>;
    _data: import("vue").Ref<any[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<any[]>;
        required: true;
        default: () => never[];
    };
    itemSize: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
    buffer: {
        type: import("vue").PropType<number>;
        default: number;
    };
    keyName: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
}>>, {
    data: any[];
    itemSize: number;
    buffer: number;
    keyName: string;
}, {}>, {
    default?(_: {
        slotScope: any;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
