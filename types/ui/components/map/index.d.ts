import 'ol/ol.css';
import 'ol-ext/dist/ol-ext.css';
import 'ol-contextmenu/ol-contextmenu.css';
export declare const SuMap: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            mapProps?: {
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
            } | undefined;
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
                readonly extent?: import("ol/extent").Extent | undefined;
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
            geolocationEnabled?: boolean | undefined;
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
            readonly options?: {
                debug: boolean;
            } | undefined;
            readonly layerOptions?: {
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
                readonly extent?: import("ol/extent").Extent | undefined;
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
            } | undefined;
            readonly sourceOptions?: {
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
            "onMap-click"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
            "onMap-dblclick"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
            "onMap-singleclick"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
            "onMap-pointerdrag"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
            "onMap-pointermove"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
            "onMap-movestart"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
            "onMap-moveend"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
            "onMap-postrender"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
            "onMap-precompose"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
            "onMap-postcompose"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
            "onView-center-changed"?: ((arg: [number, number]) => any) | undefined;
            "onView-resolution-changed"?: ((arg: number) => any) | undefined;
            "onView-rotation-changed"?: ((arg: number) => any) | undefined;
            "onView-zoom-changed"?: ((arg: number) => any) | undefined;
            "onGeoloc-change"?: ((arg: import("ol/Object").ObjectEvent) => any) | undefined;
            "onGeoloc-error"?: ((arg: import("ol/Geolocation").GeolocationError) => any) | undefined;
            "onSelect-change"?: ((features: any, e: any) => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "map-click", arg: import("ol/MapBrowserEvent").default<PointerEvent>) => void) & ((event: "map-dblclick", arg: import("ol/MapBrowserEvent").default<PointerEvent>) => void) & ((event: "map-singleclick", arg: import("ol/MapBrowserEvent").default<PointerEvent>) => void) & ((event: "map-pointerdrag", arg: import("ol/MapBrowserEvent").default<PointerEvent>) => void) & ((event: "map-pointermove", arg: import("ol/MapBrowserEvent").default<PointerEvent>) => void) & ((event: "map-movestart", arg: import("ol/MapEvent").default) => void) & ((event: "map-moveend", arg: import("ol/MapEvent").default) => void) & ((event: "map-postrender", arg: import("ol/MapEvent").default) => void) & ((event: "map-precompose", arg: import("ol/MapEvent").default) => void) & ((event: "map-postcompose", arg: import("ol/MapEvent").default) => void) & ((event: "view-center-changed", arg: [number, number]) => void) & ((event: "view-resolution-changed", arg: number) => void) & ((event: "view-rotation-changed", arg: number) => void) & ((event: "view-zoom-changed", arg: number) => void) & ((event: "geoloc-change", arg: import("ol/Object").ObjectEvent) => void) & ((event: "geoloc-error", arg: import("ol/Geolocation").GeolocationError) => void) & ((event: "select-change", features: any, e: any) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            options: {
                type: import("vue").PropType<{
                    debug: boolean;
                }>;
            };
            layerOptions: {
                type: import("vue").PropType<{
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
                    readonly extent?: import("ol/extent").Extent | undefined;
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
                } & {}>;
            };
            sourceOptions: {
                type: import("vue").PropType<{
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
                }>;
            };
            mapProps: {
                type: import("vue").PropType<{
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
                } & {}>;
                default: () => {
                    style: string;
                    loadTilesWhileAnimating: boolean;
                    loadTilesWhileInteracting: boolean;
                };
            };
            viewProps: {
                type: import("vue").PropType<{
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
                    readonly extent?: import("ol/extent").Extent | undefined;
                    readonly minResolution?: number | undefined;
                    readonly maxResolution?: number | undefined;
                    readonly resolution?: number | undefined;
                    readonly resolutions?: number[] | undefined;
                    readonly rotation?: number | undefined;
                    onCenterChanged?: ((...args: any[]) => any) | undefined;
                    onZoomChanged?: ((...args: any[]) => any) | undefined;
                    onResolutionChanged?: ((...args: any[]) => any) | undefined;
                    onRotationChanged?: ((...args: any[]) => any) | undefined;
                }>;
                default: () => {
                    projection: string;
                    maxZoom: number;
                    minZoom: number;
                    center: number[];
                };
            };
            geolocationEnabled: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
        }>> & {
            "onMap-click"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
            "onMap-dblclick"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
            "onMap-singleclick"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
            "onMap-pointerdrag"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
            "onMap-pointermove"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
            "onMap-movestart"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
            "onMap-moveend"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
            "onMap-postrender"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
            "onMap-precompose"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
            "onMap-postcompose"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
            "onView-center-changed"?: ((arg: [number, number]) => any) | undefined;
            "onView-resolution-changed"?: ((arg: number) => any) | undefined;
            "onView-rotation-changed"?: ((arg: number) => any) | undefined;
            "onView-zoom-changed"?: ((arg: number) => any) | undefined;
            "onGeoloc-change"?: ((arg: import("ol/Object").ObjectEvent) => any) | undefined;
            "onGeoloc-error"?: ((arg: import("ol/Geolocation").GeolocationError) => any) | undefined;
            "onSelect-change"?: ((features: any, e: any) => any) | undefined;
        }, {
            mapRef: import("vue").Ref<{
                map: import("ol/Map").default;
            } | undefined>;
            viewRef: import("vue").Ref<import("ol/View").default | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "map-click": (arg: import("ol/MapBrowserEvent").default<PointerEvent>) => void;
            "map-dblclick": (arg: import("ol/MapBrowserEvent").default<PointerEvent>) => void;
            "map-singleclick": (arg: import("ol/MapBrowserEvent").default<PointerEvent>) => void;
            "map-pointerdrag": (arg: import("ol/MapBrowserEvent").default<PointerEvent>) => void;
            "map-pointermove": (arg: import("ol/MapBrowserEvent").default<PointerEvent>) => void;
            "map-movestart": (arg: import("ol/MapEvent").default) => void;
            "map-moveend": (arg: import("ol/MapEvent").default) => void;
            "map-postrender": (arg: import("ol/MapEvent").default) => void;
            "map-precompose": (arg: import("ol/MapEvent").default) => void;
            "map-postcompose": (arg: import("ol/MapEvent").default) => void;
            "view-center-changed": (arg: [number, number]) => void;
            "view-resolution-changed": (arg: number) => void;
            "view-rotation-changed": (arg: number) => void;
            "view-zoom-changed": (arg: number) => void;
            "geoloc-change": (arg: import("ol/Object").ObjectEvent) => void;
            "geoloc-error": (arg: import("ol/Geolocation").GeolocationError) => void;
            "select-change": (features: any, e: any) => void;
        }, string, {
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
                readonly extent?: import("ol/extent").Extent | undefined;
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
        }, {}, string, {}> & {
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
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        options: {
            type: import("vue").PropType<{
                debug: boolean;
            }>;
        };
        layerOptions: {
            type: import("vue").PropType<{
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
                readonly extent?: import("ol/extent").Extent | undefined;
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
            } & {}>;
        };
        sourceOptions: {
            type: import("vue").PropType<{
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
            }>;
        };
        mapProps: {
            type: import("vue").PropType<{
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
            } & {}>;
            default: () => {
                style: string;
                loadTilesWhileAnimating: boolean;
                loadTilesWhileInteracting: boolean;
            };
        };
        viewProps: {
            type: import("vue").PropType<{
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
                readonly extent?: import("ol/extent").Extent | undefined;
                readonly minResolution?: number | undefined;
                readonly maxResolution?: number | undefined;
                readonly resolution?: number | undefined;
                readonly resolutions?: number[] | undefined;
                readonly rotation?: number | undefined;
                onCenterChanged?: ((...args: any[]) => any) | undefined;
                onZoomChanged?: ((...args: any[]) => any) | undefined;
                onResolutionChanged?: ((...args: any[]) => any) | undefined;
                onRotationChanged?: ((...args: any[]) => any) | undefined;
            }>;
            default: () => {
                projection: string;
                maxZoom: number;
                minZoom: number;
                center: number[];
            };
        };
        geolocationEnabled: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }>> & {
        "onMap-click"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
        "onMap-dblclick"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
        "onMap-singleclick"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
        "onMap-pointerdrag"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
        "onMap-pointermove"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
        "onMap-movestart"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
        "onMap-moveend"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
        "onMap-postrender"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
        "onMap-precompose"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
        "onMap-postcompose"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
        "onView-center-changed"?: ((arg: [number, number]) => any) | undefined;
        "onView-resolution-changed"?: ((arg: number) => any) | undefined;
        "onView-rotation-changed"?: ((arg: number) => any) | undefined;
        "onView-zoom-changed"?: ((arg: number) => any) | undefined;
        "onGeoloc-change"?: ((arg: import("ol/Object").ObjectEvent) => any) | undefined;
        "onGeoloc-error"?: ((arg: import("ol/Geolocation").GeolocationError) => any) | undefined;
        "onSelect-change"?: ((features: any, e: any) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        mapRef: import("vue").Ref<{
            map: import("ol/Map").default;
        } | undefined>;
        viewRef: import("vue").Ref<import("ol/View").default | undefined>;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: import("vue").PropType<{
            debug: boolean;
        }>;
    };
    layerOptions: {
        type: import("vue").PropType<{
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
            readonly extent?: import("ol/extent").Extent | undefined;
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
        } & {}>;
    };
    sourceOptions: {
        type: import("vue").PropType<{
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
        }>;
    };
    mapProps: {
        type: import("vue").PropType<{
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
        } & {}>;
        default: () => {
            style: string;
            loadTilesWhileAnimating: boolean;
            loadTilesWhileInteracting: boolean;
        };
    };
    viewProps: {
        type: import("vue").PropType<{
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
            readonly extent?: import("ol/extent").Extent | undefined;
            readonly minResolution?: number | undefined;
            readonly maxResolution?: number | undefined;
            readonly resolution?: number | undefined;
            readonly resolutions?: number[] | undefined;
            readonly rotation?: number | undefined;
            onCenterChanged?: ((...args: any[]) => any) | undefined;
            onZoomChanged?: ((...args: any[]) => any) | undefined;
            onResolutionChanged?: ((...args: any[]) => any) | undefined;
            onRotationChanged?: ((...args: any[]) => any) | undefined;
        }>;
        default: () => {
            projection: string;
            maxZoom: number;
            minZoom: number;
            center: number[];
        };
    };
    geolocationEnabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onMap-click"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
    "onMap-dblclick"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
    "onMap-singleclick"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
    "onMap-pointerdrag"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
    "onMap-pointermove"?: ((arg: import("ol/MapBrowserEvent").default<PointerEvent>) => any) | undefined;
    "onMap-movestart"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
    "onMap-moveend"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
    "onMap-postrender"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
    "onMap-precompose"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
    "onMap-postcompose"?: ((arg: import("ol/MapEvent").default) => any) | undefined;
    "onView-center-changed"?: ((arg: [number, number]) => any) | undefined;
    "onView-resolution-changed"?: ((arg: number) => any) | undefined;
    "onView-rotation-changed"?: ((arg: number) => any) | undefined;
    "onView-zoom-changed"?: ((arg: number) => any) | undefined;
    "onGeoloc-change"?: ((arg: import("ol/Object").ObjectEvent) => any) | undefined;
    "onGeoloc-error"?: ((arg: import("ol/Geolocation").GeolocationError) => any) | undefined;
    "onSelect-change"?: ((features: any, e: any) => any) | undefined;
}, {
    mapRef: import("vue").Ref<{
        map: import("ol/Map").default;
    } | undefined>;
    viewRef: import("vue").Ref<import("ol/View").default | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "map-click": (arg: import("ol/MapBrowserEvent").default<PointerEvent>) => void;
    "map-dblclick": (arg: import("ol/MapBrowserEvent").default<PointerEvent>) => void;
    "map-singleclick": (arg: import("ol/MapBrowserEvent").default<PointerEvent>) => void;
    "map-pointerdrag": (arg: import("ol/MapBrowserEvent").default<PointerEvent>) => void;
    "map-pointermove": (arg: import("ol/MapBrowserEvent").default<PointerEvent>) => void;
    "map-movestart": (arg: import("ol/MapEvent").default) => void;
    "map-moveend": (arg: import("ol/MapEvent").default) => void;
    "map-postrender": (arg: import("ol/MapEvent").default) => void;
    "map-precompose": (arg: import("ol/MapEvent").default) => void;
    "map-postcompose": (arg: import("ol/MapEvent").default) => void;
    "view-center-changed": (arg: [number, number]) => void;
    "view-resolution-changed": (arg: number) => void;
    "view-rotation-changed": (arg: number) => void;
    "view-zoom-changed": (arg: number) => void;
    "geoloc-change": (arg: import("ol/Object").ObjectEvent) => void;
    "geoloc-error": (arg: import("ol/Geolocation").GeolocationError) => void;
    "select-change": (features: any, e: any) => void;
}, string, {
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
        readonly extent?: import("ol/extent").Extent | undefined;
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
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: Partial<Record<"layer", (_: {}) => any>> & Partial<Record<"geo-location", (_: {}) => any>> & Partial<Record<"geo-location-point", (_: {
        position: number[] | undefined;
    }) => any>> & Partial<Record<"default", (_: {}) => any>>;
    $props: {};
}) & import("vue").Plugin;
export declare const SuInteraction: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            selectStyleFun?: ((fetrue: import("ol/Feature").FeatureLike, currentStyle: import("ol/style/Style").default, resolution: number) => import("ol/style/Style").StyleLike) | undefined;
            drawEnabled?: boolean | undefined;
            drawOptions?: Partial<import("ol/interaction/Draw").Options> | undefined;
            modifyOptions?: Partial<import("ol/interaction/Modify").Options> | undefined;
            selectOptions?: Partial<import("ol/interaction/Select").Options> | undefined;
            modifyEnabled?: boolean | undefined;
            selectEnabled?: boolean | undefined;
            layerOptions?: import("ol/layer/Layer").Options<import("ol/source/Vector").default<import("ol/geom/Geometry").default>> | undefined;
            sourceOptions?: import("ol/source/Vector").Options<import("ol/geom/Geometry").default> | undefined;
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
            readonly geojsonObject?: object | undefined;
            onDrawend?: ((arg: import("ol/interaction/Draw").DrawEvent) => any) | undefined;
            onDrawstart?: ((arg: import("ol/interaction/Draw").DrawEvent) => any) | undefined;
            onModifyend?: ((arg: any) => any) | undefined;
            onModifystart?: ((arg: any) => any) | undefined;
            onSelectChange?: ((e: import("ol/interaction/Select").SelectEvent | null, features: any[]) => any) | undefined;
            "onUpdate:modifyEnabled"?: ((arg: any) => any) | undefined;
            "onUpdate:drawEnabled"?: ((arg: any) => any) | undefined;
            onDeled?: ((e: KeyboardEvent) => any) | undefined;
            onSetId?: ((e: string | number) => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "drawend", arg: import("ol/interaction/Draw").DrawEvent) => void) & ((event: "drawstart", arg: import("ol/interaction/Draw").DrawEvent) => void) & ((event: "modifyend", arg: any) => void) & ((event: "modifystart", arg: any) => void) & ((event: "selectChange", e: import("ol/interaction/Select").SelectEvent | null, features: any[]) => void) & ((event: "update:modifyEnabled", arg: any) => void) & ((event: "update:drawEnabled", arg: any) => void) & ((event: "deled", e: KeyboardEvent) => void) & ((event: "setId", e: string | number) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            selectStyleFun: {
                type: import("vue").PropType<(fetrue: import("ol/Feature").FeatureLike, currentStyle: import("ol/style/Style").default, resolution: number) => import("ol/style/Style").StyleLike>;
                default: (feature: import("ol/Feature").FeatureLike) => import("ol/style/Style").default[];
            };
            drawEnabled: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            drawOptions: {
                type: import("vue").PropType<Partial<import("ol/interaction/Draw").Options>>;
                default: () => {};
            };
            modifyOptions: {
                type: import("vue").PropType<Partial<import("ol/interaction/Modify").Options>>;
                default: () => {};
            };
            selectOptions: {
                type: import("vue").PropType<Partial<import("ol/interaction/Select").Options>>;
                default: () => {};
            };
            modifyEnabled: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            selectEnabled: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            geojsonObject: {
                type: import("vue").PropType<object>;
            };
            layerOptions: {
                type: import("vue").PropType<import("ol/layer/Layer").Options<import("ol/source/Vector").default<import("ol/geom/Geometry").default>>>;
                default: () => {};
            };
            sourceOptions: {
                type: import("vue").PropType<import("ol/source/Vector").Options<import("ol/geom/Geometry").default>>;
                default: () => {};
            };
        }>> & {
            onDrawend?: ((arg: import("ol/interaction/Draw").DrawEvent) => any) | undefined;
            onDrawstart?: ((arg: import("ol/interaction/Draw").DrawEvent) => any) | undefined;
            onModifyend?: ((arg: any) => any) | undefined;
            onModifystart?: ((arg: any) => any) | undefined;
            onSelectChange?: ((e: import("ol/interaction/Select").SelectEvent | null, features: any[]) => any) | undefined;
            "onUpdate:modifyEnabled"?: ((arg: any) => any) | undefined;
            "onUpdate:drawEnabled"?: ((arg: any) => any) | undefined;
            onDeled?: ((e: KeyboardEvent) => any) | undefined;
            onSetId?: ((e: string | number) => any) | undefined;
        }, {
            interface: {
                source: import("ol/source/Vector").default<import("ol/geom/Geometry").default>;
                layer: import("ol/layer/Vector").default<import("ol/source/Vector").default<import("ol/geom/Geometry").default>>;
            };
            draw: import("vue").Ref<import("ol/interaction/Draw").default | undefined>;
            modify: import("vue").Ref<import("ol/interaction/Modify").default | undefined>;
            select: import("vue").Ref<import("ol/interaction/Select").default | undefined>;
            exportFeatures: () => any;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            modifyend: (arg: any) => void;
            modifystart: (arg: any) => void;
            drawstart: (arg: import("ol/interaction/Draw").DrawEvent) => void;
            drawend: (arg: import("ol/interaction/Draw").DrawEvent) => void;
            "update:modifyEnabled": (arg: any) => void;
            "update:drawEnabled": (arg: any) => void;
            selectChange: (e: import("ol/interaction/Select").SelectEvent | null, features: any[]) => void;
            deled: (e: KeyboardEvent) => void;
            setId: (e: string | number) => void;
        }, string, {
            selectStyleFun: (fetrue: import("ol/Feature").FeatureLike, currentStyle: import("ol/style/Style").default, resolution: number) => import("ol/style/Style").StyleLike;
            drawEnabled: boolean;
            drawOptions: Partial<import("ol/interaction/Draw").Options>;
            modifyOptions: Partial<import("ol/interaction/Modify").Options>;
            selectOptions: Partial<import("ol/interaction/Select").Options>;
            modifyEnabled: boolean;
            selectEnabled: boolean;
            layerOptions: import("ol/layer/Layer").Options<import("ol/source/Vector").default<import("ol/geom/Geometry").default>>;
            sourceOptions: import("ol/source/Vector").Options<import("ol/geom/Geometry").default>;
        }, {}, string, {}> & {
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
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        selectStyleFun: {
            type: import("vue").PropType<(fetrue: import("ol/Feature").FeatureLike, currentStyle: import("ol/style/Style").default, resolution: number) => import("ol/style/Style").StyleLike>;
            default: (feature: import("ol/Feature").FeatureLike) => import("ol/style/Style").default[];
        };
        drawEnabled: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        drawOptions: {
            type: import("vue").PropType<Partial<import("ol/interaction/Draw").Options>>;
            default: () => {};
        };
        modifyOptions: {
            type: import("vue").PropType<Partial<import("ol/interaction/Modify").Options>>;
            default: () => {};
        };
        selectOptions: {
            type: import("vue").PropType<Partial<import("ol/interaction/Select").Options>>;
            default: () => {};
        };
        modifyEnabled: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        selectEnabled: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        geojsonObject: {
            type: import("vue").PropType<object>;
        };
        layerOptions: {
            type: import("vue").PropType<import("ol/layer/Layer").Options<import("ol/source/Vector").default<import("ol/geom/Geometry").default>>>;
            default: () => {};
        };
        sourceOptions: {
            type: import("vue").PropType<import("ol/source/Vector").Options<import("ol/geom/Geometry").default>>;
            default: () => {};
        };
    }>> & {
        onDrawend?: ((arg: import("ol/interaction/Draw").DrawEvent) => any) | undefined;
        onDrawstart?: ((arg: import("ol/interaction/Draw").DrawEvent) => any) | undefined;
        onModifyend?: ((arg: any) => any) | undefined;
        onModifystart?: ((arg: any) => any) | undefined;
        onSelectChange?: ((e: import("ol/interaction/Select").SelectEvent | null, features: any[]) => any) | undefined;
        "onUpdate:modifyEnabled"?: ((arg: any) => any) | undefined;
        "onUpdate:drawEnabled"?: ((arg: any) => any) | undefined;
        onDeled?: ((e: KeyboardEvent) => any) | undefined;
        onSetId?: ((e: string | number) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        interface: {
            source: import("ol/source/Vector").default<import("ol/geom/Geometry").default>;
            layer: import("ol/layer/Vector").default<import("ol/source/Vector").default<import("ol/geom/Geometry").default>>;
        };
        draw: import("vue").Ref<import("ol/interaction/Draw").default | undefined>;
        modify: import("vue").Ref<import("ol/interaction/Modify").default | undefined>;
        select: import("vue").Ref<import("ol/interaction/Select").default | undefined>;
        exportFeatures: () => any;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    selectStyleFun: {
        type: import("vue").PropType<(fetrue: import("ol/Feature").FeatureLike, currentStyle: import("ol/style/Style").default, resolution: number) => import("ol/style/Style").StyleLike>;
        default: (feature: import("ol/Feature").FeatureLike) => import("ol/style/Style").default[];
    };
    drawEnabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    drawOptions: {
        type: import("vue").PropType<Partial<import("ol/interaction/Draw").Options>>;
        default: () => {};
    };
    modifyOptions: {
        type: import("vue").PropType<Partial<import("ol/interaction/Modify").Options>>;
        default: () => {};
    };
    selectOptions: {
        type: import("vue").PropType<Partial<import("ol/interaction/Select").Options>>;
        default: () => {};
    };
    modifyEnabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    selectEnabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    geojsonObject: {
        type: import("vue").PropType<object>;
    };
    layerOptions: {
        type: import("vue").PropType<import("ol/layer/Layer").Options<import("ol/source/Vector").default<import("ol/geom/Geometry").default>>>;
        default: () => {};
    };
    sourceOptions: {
        type: import("vue").PropType<import("ol/source/Vector").Options<import("ol/geom/Geometry").default>>;
        default: () => {};
    };
}>> & {
    onDrawend?: ((arg: import("ol/interaction/Draw").DrawEvent) => any) | undefined;
    onDrawstart?: ((arg: import("ol/interaction/Draw").DrawEvent) => any) | undefined;
    onModifyend?: ((arg: any) => any) | undefined;
    onModifystart?: ((arg: any) => any) | undefined;
    onSelectChange?: ((e: import("ol/interaction/Select").SelectEvent | null, features: any[]) => any) | undefined;
    "onUpdate:modifyEnabled"?: ((arg: any) => any) | undefined;
    "onUpdate:drawEnabled"?: ((arg: any) => any) | undefined;
    onDeled?: ((e: KeyboardEvent) => any) | undefined;
    onSetId?: ((e: string | number) => any) | undefined;
}, {
    interface: {
        source: import("ol/source/Vector").default<import("ol/geom/Geometry").default>;
        layer: import("ol/layer/Vector").default<import("ol/source/Vector").default<import("ol/geom/Geometry").default>>;
    };
    draw: import("vue").Ref<import("ol/interaction/Draw").default | undefined>;
    modify: import("vue").Ref<import("ol/interaction/Modify").default | undefined>;
    select: import("vue").Ref<import("ol/interaction/Select").default | undefined>;
    exportFeatures: () => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    modifyend: (arg: any) => void;
    modifystart: (arg: any) => void;
    drawstart: (arg: import("ol/interaction/Draw").DrawEvent) => void;
    drawend: (arg: import("ol/interaction/Draw").DrawEvent) => void;
    "update:modifyEnabled": (arg: any) => void;
    "update:drawEnabled": (arg: any) => void;
    selectChange: (e: import("ol/interaction/Select").SelectEvent | null, features: any[]) => void;
    deled: (e: KeyboardEvent) => void;
    setId: (e: string | number) => void;
}, string, {
    selectStyleFun: (fetrue: import("ol/Feature").FeatureLike, currentStyle: import("ol/style/Style").default, resolution: number) => import("ol/style/Style").StyleLike;
    drawEnabled: boolean;
    drawOptions: Partial<import("ol/interaction/Draw").Options>;
    modifyOptions: Partial<import("ol/interaction/Modify").Options>;
    selectOptions: Partial<import("ol/interaction/Select").Options>;
    modifyEnabled: boolean;
    selectEnabled: boolean;
    layerOptions: import("ol/layer/Layer").Options<import("ol/source/Vector").default<import("ol/geom/Geometry").default>>;
    sourceOptions: import("ol/source/Vector").Options<import("ol/geom/Geometry").default>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin;
