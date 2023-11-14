/** __vue_virtual_code_placeholder */
import type { Extent } from 'ol/extent';
import Projection from 'ol/proj/Projection.js';
import type { AnimationOptions, FitOptions } from 'ol/View';
import View, { type ViewOptions } from 'ol/View.js';
import type { Coordinate } from 'ol/coordinate';
import type { Size } from 'ol/size';
import type { Pixel } from 'ol/pixel';
import type BaseEvent from 'ol/events/Event';
import type { SimpleGeometry } from 'ol/geom';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ViewOptions>, {
    center: () => number[];
    constrainRotation: boolean;
    enableRotation: boolean;
    constrainOnlyCenter: boolean;
    smoothExtentConstraint: boolean;
    maxZoom: number;
    minZoom: number;
    multiWorld: boolean;
    constrainResolution: boolean;
    smoothResolutionConstraint: boolean;
    showFullExtent: boolean;
    projection: string;
    zoom: number;
    zoomFactor: number;
    padding: () => number[];
}>, {
    view: View;
    adjustCenter: (deltaCoordinates: Coordinate) => void;
    adjustResolution: (ratio: number, optAnchor?: Coordinate | undefined) => void;
    adjustRotation: (delta: number, optAnchor?: Coordinate | undefined) => void;
    adjustZoom: (delta: number, optAnchor?: Coordinate | undefined) => void;
    animate: (...args: (AnimationOptions | ((arg0: boolean) => void))[]) => void;
    beginInteraction: () => void;
    calculateExtent: (optSize?: Size | undefined) => Extent;
    cancelAnimations: () => void;
    centerOn: (coordinate: Coordinate, size: Size, position: Pixel) => void;
    changed: () => void;
    dispatchEvent: (event: string | BaseEvent) => boolean | undefined;
    endInteraction: (optDuration?: number | undefined, optResolutionDirection?: number | undefined, optAnchor?: Coordinate | undefined) => void;
    fit: (geometryOrExtent: SimpleGeometry | Extent, options?: FitOptions | undefined) => void;
    get: (key: string) => any;
    getAnimating: () => boolean;
    getCenter: () => Coordinate | undefined;
    getInteracting: () => boolean;
    getKeys: () => string[];
    getMaxResolution: () => number;
    getMaxZoom: () => number;
    getMinResolution: () => number;
    getMinZoom: () => number;
    getProjection: () => Projection;
    getProperties: () => {
        [x: string]: any;
    };
    getResolution: () => number | undefined;
    getResolutionForExtent: (extent: Extent, size?: Size | undefined) => number;
    getResolutionForZoom: (zoom: number) => number;
    getResolutions: () => number[] | undefined;
    getRevision: () => number;
    getRotation: () => number;
    getZoom: () => number | undefined;
    getZoomForResolution: (resolution: number) => number | undefined;
    setCenter: (center: Coordinate | undefined) => void;
    setConstrainResolution: (enabled: boolean) => void;
    setMaxZoom: (zoom: number) => void;
    setMinZoom: (zoom: number) => void;
    setResolution: (resolution: number | undefined) => void;
    setRotation: (rotation: number) => void;
    setZoom: (zoom: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("centerChanged" | "zoomChanged" | "resolutionChanged" | "rotationChanged")[], "centerChanged" | "zoomChanged" | "resolutionChanged" | "rotationChanged", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ViewOptions>, {
    center: () => number[];
    constrainRotation: boolean;
    enableRotation: boolean;
    constrainOnlyCenter: boolean;
    smoothExtentConstraint: boolean;
    maxZoom: number;
    minZoom: number;
    multiWorld: boolean;
    constrainResolution: boolean;
    smoothResolutionConstraint: boolean;
    showFullExtent: boolean;
    projection: string;
    zoom: number;
    zoomFactor: number;
    padding: () => number[];
}>>> & {
    onCenterChanged?: ((...args: any[]) => any) | undefined;
    onZoomChanged?: ((...args: any[]) => any) | undefined;
    onResolutionChanged?: ((...args: any[]) => any) | undefined;
    onRotationChanged?: ((...args: any[]) => any) | undefined;
}, {
    center: Coordinate;
    projection: string | Projection;
    minZoom: number;
    maxZoom: number;
    constrainRotation: number | boolean;
    enableRotation: boolean;
    constrainOnlyCenter: boolean;
    smoothExtentConstraint: boolean;
    multiWorld: boolean;
    constrainResolution: boolean;
    smoothResolutionConstraint: boolean;
    showFullExtent: boolean;
    zoom: number;
    zoomFactor: number;
    padding: number[];
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
