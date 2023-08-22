import { type IconifyIcon } from '@iconify/vue';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: import("vue").PropType<string | IconifyIcon>;
        required: true;
    };
    onLoad: {
        type: import("vue").PropType<() => void>;
    };
    color: {
        type: import("vue").PropType<string>;
    };
    height: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    rotate: {
        type: import("vue").PropType<number>;
    };
    online: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    inline: {
        type: import("vue").PropType<boolean>;
    };
    filp: {
        type: import("vue").PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: import("vue").PropType<string | IconifyIcon>;
        required: true;
    };
    onLoad: {
        type: import("vue").PropType<() => void>;
    };
    color: {
        type: import("vue").PropType<string>;
    };
    height: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    rotate: {
        type: import("vue").PropType<number>;
    };
    online: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    inline: {
        type: import("vue").PropType<boolean>;
    };
    filp: {
        type: import("vue").PropType<string>;
    };
}>>, {
    height: string | number;
    width: string | number;
    online: boolean;
}, {}>;
export default _default;
