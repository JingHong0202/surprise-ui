import { type StyleValue } from 'vue';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<"" | "primary" | "success" | "warning" | "danger" | "error" | "info">;
        default: string;
    };
    customStyle: {
        type: import("vue").PropType<StyleValue>;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    plain: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    round: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onClick: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<"" | "primary" | "success" | "warning" | "danger" | "error" | "info">;
        default: string;
    };
    customStyle: {
        type: import("vue").PropType<StyleValue>;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    plain: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    round: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
