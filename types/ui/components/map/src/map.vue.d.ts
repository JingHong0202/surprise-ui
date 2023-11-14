/** __vue_virtual_code_placeholder */
import * as extent from 'ol/extent.js';
import { type default as MapRefType } from 'ol/Map';
import { type default as ViewRefType } from 'ol/View';
import type MapEvent from 'ol/MapEvent';
import type MapBrowserEvent from 'ol/MapBrowserEvent';
import { ObjectEvent } from 'ol/Object';
import { GeolocationError } from 'ol/Geolocation';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    options?: {
        debug: boolean;
    } | undefined;
    /** https://vue3openlayers.netlify.app/componentsguide/map/ */
    mapProps?: ({
        controls?: import("ol/Collection").default<import("ol/control/Control").default> | import("ol/control/Control").default[] | undefined;
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
        onClick?: ((...args: any[]) => any) | undefined;
        key?: string | number | symbol | undefined;
        ref?: import("vue").VNodeRef | undefined;
        ref_for?: boolean | undefined;
        ref_key?: string | undefined;
        onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        class?: unknown;
        style?: unknown;
        onDblclick?: ((...args: any[]) => any) | undefined;
        onPointermove?: ((...args: any[]) => any) | undefined;
        onPostrender?: ((...args: any[]) => any) | undefined;
        onSingleclick?: ((...args: any[]) => any) | undefined;
        onPointerdrag?: ((...args: any[]) => any) | undefined;
        onMovestart?: ((...args: any[]) => any) | undefined;
        onMoveend?: ((...args: any[]) => any) | undefined;
        onPrecompose?: ((...args: any[]) => any) | undefined;
        onPostcompose?: ((...args: any[]) => any) | undefined;
    } & {}) | undefined;
    /** https://vue3openlayers.netlify.app/componentsguide/view/#events */
    viewProps?: {
        center?: import("ol/coordinate").Coordinate | undefined;
        projection?: string | import("ol/proj/Projection").default | undefined;
        minZoom?: number | undefined;
        maxZoom?: number | undefined;
        constrainRotation?: number | boolean | undefined;
        enableRotation?: boolean | undefined;
        constrainOnlyCenter?: boolean | undefined;
        smoothExtentConstraint?: boolean | undefined;
        multiWorld?: boolean | undefined;
        constrainResolution?: boolean | undefined;
        smoothResolutionConstraint?: boolean | undefined;
        showFullExtent?: boolean | undefined;
        zoom?: number | undefined;
        zoomFactor?: number | undefined;
        padding?: number[] | undefined;
        key?: string | number | symbol | undefined;
        ref?: import("vue").VNodeRef | undefined;
        ref_for?: boolean | undefined;
        ref_key?: string | undefined;
        onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        class?: unknown;
        style?: unknown;
        readonly extent?: extent.Extent | undefined;
        readonly minResolution?: number | undefined;
        readonly maxResolution?: number | undefined;
        readonly resolution?: number | undefined;
        readonly resolutions?: number[] | undefined;
        readonly rotation?: number | undefined;
        onCenterChanged?: ((...args: any[]) => any) | undefined;
        onZoomChanged?: ((...args: any[]) => any) | undefined;
        onResolutionChanged?: ((...args: any[]) => any) | undefined;
        onRotationChanged?: ((...args: any[]) => any) | undefined;
    } | undefined;
    /** 是否开启地理定位 */
    geolocationEnabled?: boolean | undefined;
    layerOptions?: ({
        properties?: (() => Record<string, any>) | undefined;
        opacity?: number | undefined;
        className?: string | undefined;
        visible?: boolean | undefined;
        preload?: number | undefined;
        readonly name?: string | undefined;
        key?: string | number | symbol | undefined;
        ref?: import("vue").VNodeRef | undefined;
        ref_for?: boolean | undefined;
        ref_key?: string | undefined;
        onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        class?: unknown;
        style?: unknown;
        readonly title?: string | undefined;
        readonly zIndex?: number | undefined;
        readonly extent?: extent.Extent | undefined;
        readonly minResolution?: number | undefined;
        readonly maxResolution?: number | undefined;
        readonly minZoom?: number | undefined;
        readonly maxZoom?: number | undefined;
        readonly preview?: string | undefined;
        readonly baseLayer?: boolean | undefined;
        readonly noSwitcherDelete?: boolean | undefined;
        readonly openInLayerSwitcher?: boolean | undefined;
        readonly allwaysOnTop?: boolean | undefined;
        readonly displayInLayerSwitcher?: boolean | undefined;
    } & {}) | undefined;
    sourceOptions?: {
        transition?: number | undefined;
        wrapX?: boolean | undefined;
        maxZoom?: number | undefined;
        crossOrigin?: string | null | undefined;
        interpolate?: boolean | undefined;
        opaque?: boolean | undefined;
        reprojectionErrorThreshold?: number | undefined;
        url?: string | undefined;
        zDirection?: number | import("ol/array").NearestDirectionFunction | undefined;
        key?: string | number | symbol | undefined;
        ref?: import("vue").VNodeRef | undefined;
        ref_for?: boolean | undefined;
        ref_key?: string | undefined;
        onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        class?: unknown;
        style?: unknown;
        readonly attributions?: import("ol/source/Source").AttributionLike | undefined;
        readonly cacheSize?: number | undefined;
        readonly tileLoadFunction?: import("ol/Tile").LoadFunction | undefined;
    } | undefined;
}>, {
    mapProps: () => {
        style: string;
        loadTilesWhileAnimating: boolean;
        loadTilesWhileInteracting: boolean;
    };
    viewProps: () => {
        projection: string;
        maxZoom: number;
        minZoom: number;
        center: number[];
    };
    geolocationEnabled: boolean;
}>, {
    mapRef: import("vue").Ref<{
        map: MapRefType;
    } | undefined>;
    viewRef: import("vue").Ref<ViewRefType | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "map-click": (arg: MapBrowserEvent<PointerEvent>) => void;
    "map-dblclick": (arg: MapBrowserEvent<PointerEvent>) => void;
    "map-singleclick": (arg: MapBrowserEvent<PointerEvent>) => void;
    "map-pointerdrag": (arg: MapBrowserEvent<PointerEvent>) => void;
    "map-pointermove": (arg: MapBrowserEvent<PointerEvent>) => void;
    "map-movestart": (arg: MapEvent) => void;
    "map-moveend": (arg: MapEvent) => void;
    "map-postrender": (arg: MapEvent) => void;
    "map-precompose": (arg: MapEvent) => void;
    "map-postcompose": (arg: MapEvent) => void;
    "view-center-changed": (arg: [number, number]) => void;
    "view-resolution-changed": (arg: number) => void;
    "view-rotation-changed": (arg: number) => void;
    "view-zoom-changed": (arg: number) => void;
    "geoloc-change": (arg: ObjectEvent) => void;
    "geoloc-error": (arg: GeolocationError) => void;
    "select-change": (features: any, e: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    options?: {
        debug: boolean;
    } | undefined;
    /** https://vue3openlayers.netlify.app/componentsguide/map/ */
    mapProps?: ({
        controls?: import("ol/Collection").default<import("ol/control/Control").default> | import("ol/control/Control").default[] | undefined;
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
        onClick?: ((...args: any[]) => any) | undefined;
        key?: string | number | symbol | undefined;
        ref?: import("vue").VNodeRef | undefined;
        ref_for?: boolean | undefined;
        ref_key?: string | undefined;
        onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        class?: unknown;
        style?: unknown;
        onDblclick?: ((...args: any[]) => any) | undefined;
        onPointermove?: ((...args: any[]) => any) | undefined;
        onPostrender?: ((...args: any[]) => any) | undefined;
        onSingleclick?: ((...args: any[]) => any) | undefined;
        onPointerdrag?: ((...args: any[]) => any) | undefined;
        onMovestart?: ((...args: any[]) => any) | undefined;
        onMoveend?: ((...args: any[]) => any) | undefined;
        onPrecompose?: ((...args: any[]) => any) | undefined;
        onPostcompose?: ((...args: any[]) => any) | undefined;
    } & {}) | undefined;
    /** https://vue3openlayers.netlify.app/componentsguide/view/#events */
    viewProps?: {
        center?: import("ol/coordinate").Coordinate | undefined;
        projection?: string | import("ol/proj/Projection").default | undefined;
        minZoom?: number | undefined;
        maxZoom?: number | undefined;
        constrainRotation?: number | boolean | undefined;
        enableRotation?: boolean | undefined;
        constrainOnlyCenter?: boolean | undefined;
        smoothExtentConstraint?: boolean | undefined;
        multiWorld?: boolean | undefined;
        constrainResolution?: boolean | undefined;
        smoothResolutionConstraint?: boolean | undefined;
        showFullExtent?: boolean | undefined;
        zoom?: number | undefined;
        zoomFactor?: number | undefined;
        padding?: number[] | undefined;
        key?: string | number | symbol | undefined;
        ref?: import("vue").VNodeRef | undefined;
        ref_for?: boolean | undefined;
        ref_key?: string | undefined;
        onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        class?: unknown;
        style?: unknown;
        readonly extent?: extent.Extent | undefined;
        readonly minResolution?: number | undefined;
        readonly maxResolution?: number | undefined;
        readonly resolution?: number | undefined;
        readonly resolutions?: number[] | undefined;
        readonly rotation?: number | undefined;
        onCenterChanged?: ((...args: any[]) => any) | undefined;
        onZoomChanged?: ((...args: any[]) => any) | undefined;
        onResolutionChanged?: ((...args: any[]) => any) | undefined;
        onRotationChanged?: ((...args: any[]) => any) | undefined;
    } | undefined;
    /** 是否开启地理定位 */
    geolocationEnabled?: boolean | undefined;
    layerOptions?: ({
        properties?: (() => Record<string, any>) | undefined;
        opacity?: number | undefined;
        className?: string | undefined;
        visible?: boolean | undefined;
        preload?: number | undefined;
        readonly name?: string | undefined;
        key?: string | number | symbol | undefined;
        ref?: import("vue").VNodeRef | undefined;
        ref_for?: boolean | undefined;
        ref_key?: string | undefined;
        onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        class?: unknown;
        style?: unknown;
        readonly title?: string | undefined;
        readonly zIndex?: number | undefined;
        readonly extent?: extent.Extent | undefined;
        readonly minResolution?: number | undefined;
        readonly maxResolution?: number | undefined;
        readonly minZoom?: number | undefined;
        readonly maxZoom?: number | undefined;
        readonly preview?: string | undefined;
        readonly baseLayer?: boolean | undefined;
        readonly noSwitcherDelete?: boolean | undefined;
        readonly openInLayerSwitcher?: boolean | undefined;
        readonly allwaysOnTop?: boolean | undefined;
        readonly displayInLayerSwitcher?: boolean | undefined;
    } & {}) | undefined;
    sourceOptions?: {
        transition?: number | undefined;
        wrapX?: boolean | undefined;
        maxZoom?: number | undefined;
        crossOrigin?: string | null | undefined;
        interpolate?: boolean | undefined;
        opaque?: boolean | undefined;
        reprojectionErrorThreshold?: number | undefined;
        url?: string | undefined;
        zDirection?: number | import("ol/array").NearestDirectionFunction | undefined;
        key?: string | number | symbol | undefined;
        ref?: import("vue").VNodeRef | undefined;
        ref_for?: boolean | undefined;
        ref_key?: string | undefined;
        onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        class?: unknown;
        style?: unknown;
        readonly attributions?: import("ol/source/Source").AttributionLike | undefined;
        readonly cacheSize?: number | undefined;
        readonly tileLoadFunction?: import("ol/Tile").LoadFunction | undefined;
    } | undefined;
}>, {
    mapProps: () => {
        style: string;
        loadTilesWhileAnimating: boolean;
        loadTilesWhileInteracting: boolean;
    };
    viewProps: () => {
        projection: string;
        maxZoom: number;
        minZoom: number;
        center: number[];
    };
    geolocationEnabled: boolean;
}>>> & {
    "onMap-click"?: ((arg: MapBrowserEvent<PointerEvent>) => any) | undefined;
    "onMap-dblclick"?: ((arg: MapBrowserEvent<PointerEvent>) => any) | undefined;
    "onMap-singleclick"?: ((arg: MapBrowserEvent<PointerEvent>) => any) | undefined;
    "onMap-pointerdrag"?: ((arg: MapBrowserEvent<PointerEvent>) => any) | undefined;
    "onMap-pointermove"?: ((arg: MapBrowserEvent<PointerEvent>) => any) | undefined;
    "onMap-movestart"?: ((arg: MapEvent) => any) | undefined;
    "onMap-moveend"?: ((arg: MapEvent) => any) | undefined;
    "onMap-postrender"?: ((arg: MapEvent) => any) | undefined;
    "onMap-precompose"?: ((arg: MapEvent) => any) | undefined;
    "onMap-postcompose"?: ((arg: MapEvent) => any) | undefined;
    "onView-center-changed"?: ((arg: [number, number]) => any) | undefined;
    "onView-resolution-changed"?: ((arg: number) => any) | undefined;
    "onView-rotation-changed"?: ((arg: number) => any) | undefined;
    "onView-zoom-changed"?: ((arg: number) => any) | undefined;
    "onGeoloc-change"?: ((arg: ObjectEvent) => any) | undefined;
    "onGeoloc-error"?: ((arg: GeolocationError) => any) | undefined;
    "onSelect-change"?: ((features: any, e: any) => any) | undefined;
}, {
    mapProps: {
        controls?: import("ol/Collection").default<import("ol/control/Control").default> | import("ol/control/Control").default[] | undefined;
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
        onClick?: ((...args: any[]) => any) | undefined;
        key?: string | number | symbol | undefined;
        ref?: import("vue").VNodeRef | undefined;
        ref_for?: boolean | undefined;
        ref_key?: string | undefined;
        onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        class?: unknown;
        style?: unknown;
        onDblclick?: ((...args: any[]) => any) | undefined;
        onPointermove?: ((...args: any[]) => any) | undefined;
        onPostrender?: ((...args: any[]) => any) | undefined;
        onSingleclick?: ((...args: any[]) => any) | undefined;
        onPointerdrag?: ((...args: any[]) => any) | undefined;
        onMovestart?: ((...args: any[]) => any) | undefined;
        onMoveend?: ((...args: any[]) => any) | undefined;
        onPrecompose?: ((...args: any[]) => any) | undefined;
        onPostcompose?: ((...args: any[]) => any) | undefined;
    };
    viewProps: {
        center?: import("ol/coordinate").Coordinate | undefined;
        projection?: string | import("ol/proj/Projection").default | undefined;
        minZoom?: number | undefined;
        maxZoom?: number | undefined;
        constrainRotation?: number | boolean | undefined;
        enableRotation?: boolean | undefined;
        constrainOnlyCenter?: boolean | undefined;
        smoothExtentConstraint?: boolean | undefined;
        multiWorld?: boolean | undefined;
        constrainResolution?: boolean | undefined;
        smoothResolutionConstraint?: boolean | undefined;
        showFullExtent?: boolean | undefined;
        zoom?: number | undefined;
        zoomFactor?: number | undefined;
        padding?: number[] | undefined;
        key?: string | number | symbol | undefined;
        ref?: import("vue").VNodeRef | undefined;
        ref_for?: boolean | undefined;
        ref_key?: string | undefined;
        onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        class?: unknown;
        style?: unknown;
        readonly extent?: extent.Extent | undefined;
        readonly minResolution?: number | undefined;
        readonly maxResolution?: number | undefined;
        readonly resolution?: number | undefined;
        readonly resolutions?: number[] | undefined;
        readonly rotation?: number | undefined;
        onCenterChanged?: ((...args: any[]) => any) | undefined;
        onZoomChanged?: ((...args: any[]) => any) | undefined;
        onResolutionChanged?: ((...args: any[]) => any) | undefined;
        onRotationChanged?: ((...args: any[]) => any) | undefined;
    };
    geolocationEnabled: boolean;
}, {}>, Partial<Record<"layer", (_: {}) => any>> & Partial<Record<"geo-location", (_: {}) => any>> & Partial<Record<"geo-location-point", (_: {
    position: number[] | undefined;
}) => any>> & Partial<Record<"default", (_: {}) => any>>>;
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
