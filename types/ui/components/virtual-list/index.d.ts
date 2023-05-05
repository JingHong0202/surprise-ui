import type { Plugin } from 'vue';
export declare const horizonetalVirtualList: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            data: any[];
            itemSize: number;
            buffer: number;
            keyName: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "data" | "itemSize" | "buffer" | "keyName">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
            reset: () => void;
            container: import("vue").Ref<HTMLDivElement | undefined>;
            _data: import("vue").Ref<any[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            data: any[];
            itemSize: number;
            buffer: number;
            keyName: string;
        }, {}, string> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
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
    }>> & import("vue").ShallowUnwrapRef<{
        reset: () => void;
        container: import("vue").Ref<HTMLDivElement | undefined>;
        _data: import("vue").Ref<any[]>;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    reset: () => void;
    container: import("vue").Ref<HTMLDivElement | undefined>;
    _data: import("vue").Ref<any[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    data: any[];
    itemSize: number;
    buffer: number;
    keyName: string;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {
            slotScope: any;
        }): any;
    };
}) & Plugin;
export declare const verticalVirtualList: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            data: any[];
            itemSize: number;
            buffer: number;
            keyName: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "data" | "itemSize" | "buffer" | "keyName">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
            reset: () => void;
            container: import("vue").Ref<HTMLDivElement | undefined>;
            _data: import("vue").Ref<any[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            data: any[];
            itemSize: number;
            buffer: number;
            keyName: string;
        }, {}, string> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
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
    }>> & import("vue").ShallowUnwrapRef<{
        reset: () => void;
        container: import("vue").Ref<HTMLDivElement | undefined>;
        _data: import("vue").Ref<any[]>;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    reset: () => void;
    container: import("vue").Ref<HTMLDivElement | undefined>;
    _data: import("vue").Ref<any[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    data: any[];
    itemSize: number;
    buffer: number;
    keyName: string;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {
            slotScope: any;
        }): any;
    };
}) & Plugin;
