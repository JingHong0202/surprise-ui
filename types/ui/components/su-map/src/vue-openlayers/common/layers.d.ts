import type { Extent } from 'ol/extent';
export declare const layersCommonDefaultProps: {
    opacity: number;
    visible: boolean;
    properties: () => {};
};
export type LayersCommonProps = {
    className?: string;
    opacity?: number;
    visible?: boolean;
    extent?: Extent;
    zIndex?: number;
    minResolution?: number;
    maxResolution?: number;
    minZoom?: number;
    maxZoom?: number;
    title?: string;
    name?: string;
    preview?: string;
    baseLayer?: boolean;
    noSwitcherDelete?: boolean;
    openInLayerSwitcher?: boolean;
    allwaysOnTop?: boolean;
    displayInLayerSwitcher?: boolean;
    properties?: () => Record<string, any>;
};
