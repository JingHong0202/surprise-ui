/** __vue_virtual_code_placeholder */
import Geolocation, { type Options } from 'ol/Geolocation.js';
import type { Coordinate } from 'ol/coordinate';
import type Polygon from 'ol/geom/Polygon';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Options>, {
    projection: string;
    tracking: boolean;
    trackingOptions: () => {
        enableHighAccuracy: boolean;
    };
}>, {
    geoLoc: import("vue").ComputedRef<Geolocation>;
    position: import("vue").Ref<number[] | undefined>;
    accuracy: import("vue").Ref<number | undefined>;
    altitude: import("vue").Ref<number | undefined>;
    altitudeAccuracy: import("vue").Ref<number | undefined>;
    speed: import("vue").Ref<number | undefined>;
    heading: import("vue").Ref<number | undefined>;
    accuracyGeometry: import("vue").Ref<{
        appendLinearRing: (linearRing: import("ol/geom/LinearRing").default) => void;
        clone: () => Polygon;
        getArea: () => number;
        getCoordinates: (right?: boolean | undefined) => Coordinate[][];
        getEnds: () => number[];
        getFlatInteriorPoint: () => number[];
        getInteriorPoint: () => import("ol/geom/Point").default;
        getLinearRingCount: () => number;
        getLinearRing: (index: number) => import("ol/geom/LinearRing").default | null;
        getLinearRings: () => import("ol/geom/LinearRing").default[];
        getOrientedFlatCoordinates: () => number[];
        setCoordinates: (coordinates: Coordinate[][], layout?: import("ol/geom/Geometry").GeometryLayout | undefined) => void;
        getFirstCoordinate: () => Coordinate;
        getFlatCoordinates: () => number[];
        getLastCoordinate: () => Coordinate;
        getLayout: () => import("ol/geom/Geometry").GeometryLayout;
        getSimplifiedGeometry: (squaredTolerance: number) => import("ol/geom/SimpleGeometry").default;
        getStride: () => number;
        setFlatCoordinates: (layout: import("ol/geom/Geometry").GeometryLayout, flatCoordinates: number[]) => void;
        simplifyTransformedInternal: (...arg0: any[]) => any;
        simplifyTransformed: (squaredTolerance: number, transform?: import("ol/proj").TransformFunction | undefined) => import("ol/geom/Geometry").default;
        closestPointXY: (x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number) => number;
        containsXY: (x: number, y: number) => boolean;
        getClosestPoint: (point: Coordinate, closestPoint?: Coordinate | undefined) => Coordinate;
        intersectsCoordinate: (coordinate: Coordinate) => boolean;
        getExtent: (extent?: import("ol/extent").Extent | undefined) => import("ol/extent").Extent;
        rotate: (angle: number, anchor: Coordinate) => void;
        scale: (sx: number, sy?: number | undefined, anchor?: Coordinate | undefined) => void;
        simplify: (tolerance: number) => import("ol/geom/Geometry").default;
        getType: () => import("ol/geom/Geometry").Type;
        applyTransform: (transformFn: import("ol/proj").TransformFunction) => void;
        intersectsExtent: (extent: import("ol/extent").Extent) => boolean;
        translate: (deltaX: number, deltaY: number) => void;
        transform: (source: import("ol/proj").ProjectionLike, destination: import("ol/proj").ProjectionLike) => import("ol/geom/Geometry").default;
        on: import("ol/Object").ObjectOnSignature<import("ol/events").EventsKey>;
        once: import("ol/Object").ObjectOnSignature<import("ol/events").EventsKey>;
        un: import("ol/Object").ObjectOnSignature<void>;
        get: (key: string) => any;
        getKeys: () => string[];
        getProperties: () => {
            [x: string]: any;
        };
        hasProperties: () => boolean;
        notify: (key: string, oldValue: any) => void;
        addChangeListener: (key: string, listener: import("ol/events").Listener) => void;
        removeChangeListener: (key: string, listener: import("ol/events").Listener) => void;
        set: (key: string, value: any, silent?: boolean | undefined) => void;
        setProperties: (values: {
            [x: string]: any;
        }, silent?: boolean | undefined) => void;
        unset: (key: string, silent?: boolean | undefined) => void;
        changed: () => void;
        getRevision: () => number;
        addEventListener: (type: string, listener: import("ol/events").Listener) => void;
        dispatchEvent: (event: string | import("ol/events/Event").default) => boolean | undefined;
        getListeners: (type: string) => import("ol/events").Listener[] | undefined;
        hasListener: (type?: string | undefined) => boolean;
        removeEventListener: (type: string, listener: import("ol/events").Listener) => void;
        dispose: () => void;
    } | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Options>, {
    projection: string;
    tracking: boolean;
    trackingOptions: () => {
        enableHighAccuracy: boolean;
    };
}>>>, {
    tracking: boolean;
    trackingOptions: PositionOptions;
    projection: string | import("ol/proj/Projection").default;
}, {}>, Partial<Record<"default", (_: {
    position: number[] | undefined;
    speed: number | undefined;
    heading: number | undefined;
    accuracy: number | undefined;
    altitude: number | undefined;
    altitudeAccuracy: number | undefined;
    accuracyGeometry: {
        appendLinearRing: (linearRing: import("ol/geom/LinearRing").default) => void;
        clone: () => Polygon;
        getArea: () => number;
        getCoordinates: (right?: boolean | undefined) => Coordinate[][];
        getEnds: () => number[];
        getFlatInteriorPoint: () => number[];
        getInteriorPoint: () => import("ol/geom/Point").default;
        getLinearRingCount: () => number;
        getLinearRing: (index: number) => import("ol/geom/LinearRing").default | null;
        getLinearRings: () => import("ol/geom/LinearRing").default[];
        getOrientedFlatCoordinates: () => number[];
        setCoordinates: (coordinates: Coordinate[][], layout?: import("ol/geom/Geometry").GeometryLayout | undefined) => void;
        getFirstCoordinate: () => Coordinate;
        getFlatCoordinates: () => number[];
        getLastCoordinate: () => Coordinate;
        getLayout: () => import("ol/geom/Geometry").GeometryLayout;
        getSimplifiedGeometry: (squaredTolerance: number) => import("ol/geom/SimpleGeometry").default;
        getStride: () => number;
        setFlatCoordinates: (layout: import("ol/geom/Geometry").GeometryLayout, flatCoordinates: number[]) => void;
        simplifyTransformedInternal: (...arg0: any[]) => any;
        simplifyTransformed: (squaredTolerance: number, transform?: import("ol/proj").TransformFunction | undefined) => import("ol/geom/Geometry").default;
        closestPointXY: (x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number) => number;
        containsXY: (x: number, y: number) => boolean;
        getClosestPoint: (point: Coordinate, closestPoint?: Coordinate | undefined) => Coordinate;
        intersectsCoordinate: (coordinate: Coordinate) => boolean;
        getExtent: (extent?: import("ol/extent").Extent | undefined) => import("ol/extent").Extent;
        rotate: (angle: number, anchor: Coordinate) => void;
        scale: (sx: number, sy?: number | undefined, anchor?: Coordinate | undefined) => void;
        simplify: (tolerance: number) => import("ol/geom/Geometry").default;
        getType: () => import("ol/geom/Geometry").Type;
        applyTransform: (transformFn: import("ol/proj").TransformFunction) => void;
        intersectsExtent: (extent: import("ol/extent").Extent) => boolean;
        translate: (deltaX: number, deltaY: number) => void;
        transform: (source: import("ol/proj").ProjectionLike, destination: import("ol/proj").ProjectionLike) => import("ol/geom/Geometry").default;
        on: import("ol/Object").ObjectOnSignature<import("ol/events").EventsKey>;
        once: import("ol/Object").ObjectOnSignature<import("ol/events").EventsKey>;
        un: import("ol/Object").ObjectOnSignature<void>;
        get: (key: string) => any;
        getKeys: () => string[];
        getProperties: () => {
            [x: string]: any;
        };
        hasProperties: () => boolean;
        notify: (key: string, oldValue: any) => void;
        addChangeListener: (key: string, listener: import("ol/events").Listener) => void;
        removeChangeListener: (key: string, listener: import("ol/events").Listener) => void;
        set: (key: string, value: any, silent?: boolean | undefined) => void;
        setProperties: (values: {
            [x: string]: any;
        }, silent?: boolean | undefined) => void;
        unset: (key: string, silent?: boolean | undefined) => void;
        changed: () => void;
        getRevision: () => number;
        addEventListener: (type: string, listener: import("ol/events").Listener) => void;
        dispatchEvent: (event: string | import("ol/events/Event").default) => boolean | undefined;
        getListeners: (type: string) => import("ol/events").Listener[] | undefined;
        hasListener: (type?: string | undefined) => boolean;
        removeEventListener: (type: string, listener: import("ol/events").Listener) => void;
        dispose: () => void;
    } | null;
}) => any>>>;
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
