/** __vue_virtual_code_placeholder */
import type { AtPixelOptions } from 'ol/Map';
import Map from 'ol/Map.js';
import type Collection from 'ol/Collection';
import type Control from 'ol/control/Control';
import type { FeatureLike } from 'ol/Feature';
import type { SimpleGeometry } from 'ol/geom';
import type LayerRenderer from 'ol/renderer/Layer';
import type { Layer } from 'ol/layer';
import type { Pixel } from 'ol/pixel';
import type { Source } from 'ol/source';
import type { Coordinate } from 'ol/coordinate';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    controls?: Collection<Control> | Control[] | undefined;
    pixelRatio?: number | undefined;
    loadTilesWhileAnimating?: boolean | undefined;
    loadTilesWhileInteracting?: boolean | undefined;
    moveTolerance?: number | undefined;
    altShiftDragRotate?: boolean | undefined;
    onFocusOnly?: boolean | undefined;
    doubleClickZoom?: boolean | undefined;
    keyboard?: boolean | undefined;
    mouseWheelZoom?: boolean | undefined;
    shiftDragZoom?: boolean | undefined;
    dragPan?: boolean | undefined;
    pinchRotate?: boolean | undefined;
    pinchZoom?: boolean | undefined;
}>, {
    loadTilesWhileAnimating: boolean;
    loadTilesWhileInteracting: boolean;
    moveTolerance: number;
    pixelRatio: number;
    controls: undefined;
    altShiftDragRotate: boolean;
    onFocusOnly: boolean;
    doubleClickZoom: boolean;
    keyboard: boolean;
    mouseWheelZoom: boolean;
    shiftDragZoom: boolean;
    dragPan: boolean;
    pinchRotate: boolean;
    pinchZoom: boolean;
}>, {
    map: Map | undefined;
    mapRef: import("vue").Ref<string | HTMLElement | undefined>;
    forEachFeatureAtPixel: (pixel: Pixel, callback: (arg0: FeatureLike, arg1: Layer<Source, LayerRenderer<any>>, arg2: SimpleGeometry) => unknown, options?: AtPixelOptions | undefined) => unknown;
    getCoordinateFromPixel: (pixel: Coordinate) => Coordinate | undefined;
    render: () => void | undefined;
    updateSize: () => void | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "postrender" | "dblclick" | "pointermove" | "singleclick" | "pointerdrag" | "movestart" | "moveend" | "precompose" | "postcompose")[], "click" | "postrender" | "dblclick" | "pointermove" | "singleclick" | "pointerdrag" | "movestart" | "moveend" | "precompose" | "postcompose", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    controls?: Collection<Control> | Control[] | undefined;
    pixelRatio?: number | undefined;
    loadTilesWhileAnimating?: boolean | undefined;
    loadTilesWhileInteracting?: boolean | undefined;
    moveTolerance?: number | undefined;
    altShiftDragRotate?: boolean | undefined;
    onFocusOnly?: boolean | undefined;
    doubleClickZoom?: boolean | undefined;
    keyboard?: boolean | undefined;
    mouseWheelZoom?: boolean | undefined;
    shiftDragZoom?: boolean | undefined;
    dragPan?: boolean | undefined;
    pinchRotate?: boolean | undefined;
    pinchZoom?: boolean | undefined;
}>, {
    loadTilesWhileAnimating: boolean;
    loadTilesWhileInteracting: boolean;
    moveTolerance: number;
    pixelRatio: number;
    controls: undefined;
    altShiftDragRotate: boolean;
    onFocusOnly: boolean;
    doubleClickZoom: boolean;
    keyboard: boolean;
    mouseWheelZoom: boolean;
    shiftDragZoom: boolean;
    dragPan: boolean;
    pinchRotate: boolean;
    pinchZoom: boolean;
}>>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onDblclick?: ((...args: any[]) => any) | undefined;
    onPointermove?: ((...args: any[]) => any) | undefined;
    onPostrender?: ((...args: any[]) => any) | undefined;
    onSingleclick?: ((...args: any[]) => any) | undefined;
    onPointerdrag?: ((...args: any[]) => any) | undefined;
    onMovestart?: ((...args: any[]) => any) | undefined;
    onMoveend?: ((...args: any[]) => any) | undefined;
    onPrecompose?: ((...args: any[]) => any) | undefined;
    onPostcompose?: ((...args: any[]) => any) | undefined;
}, {
    controls: Collection<Control> | Control[];
    pixelRatio: number;
    loadTilesWhileAnimating: boolean;
    loadTilesWhileInteracting: boolean;
    moveTolerance: number;
    altShiftDragRotate: boolean;
    onFocusOnly: boolean;
    doubleClickZoom: boolean;
    keyboard: boolean;
    mouseWheelZoom: boolean;
    shiftDragZoom: boolean;
    dragPan: boolean;
    pinchRotate: boolean;
    pinchZoom: boolean;
}, {}>, Partial<Record<"default", (_: {}) => any>>>;
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
        $props: __VLS_PropsChildren<S>;
    };
};
type __VLS_PropsChildren<S> = {
    [K in keyof (boolean extends (JSX.ElementChildrenAttribute extends never ? true : false) ? never : JSX.ElementChildrenAttribute)]?: S;
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
