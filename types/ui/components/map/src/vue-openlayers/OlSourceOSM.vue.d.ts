/** __vue_virtual_code_placeholder */
import OSM, { type Options } from 'ol/source/OSM.js';
import type { Ref } from 'vue';
import type TileLayer from 'ol/layer/Tile';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Options>, {
    crossOrigin: string;
    interpolate: boolean;
    maxZoom: number;
    opaque: boolean;
    reprojectionErrorThreshold: number;
    transition: number;
    url: string;
    wrapX: boolean;
    zDirection: number;
}>, {
    layer: Ref<TileLayer<OSM>> | null | undefined;
    source: import("vue").ComputedRef<OSM>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Options>, {
    crossOrigin: string;
    interpolate: boolean;
    maxZoom: number;
    opaque: boolean;
    reprojectionErrorThreshold: number;
    transition: number;
    url: string;
    wrapX: boolean;
    zDirection: number;
}>>>, {
    transition: number;
    wrapX: boolean;
    maxZoom: number;
    crossOrigin: string | null;
    interpolate: boolean;
    opaque: boolean;
    reprojectionErrorThreshold: number;
    url: string;
    zDirection: number | import("ol/array").NearestDirectionFunction;
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
