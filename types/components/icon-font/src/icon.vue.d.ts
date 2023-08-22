declare const _default: import("vue").DefineComponent<{
    name: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    type: {
        type: import("vue").PropType<"symbol" | "unicode" | "font-class">;
        required: true;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    type: {
        type: import("vue").PropType<"symbol" | "unicode" | "font-class">;
        required: true;
        default: string;
    };
}>>, {
    name: string;
    type: "symbol" | "unicode" | "font-class";
}, {}>;
export default _default;
