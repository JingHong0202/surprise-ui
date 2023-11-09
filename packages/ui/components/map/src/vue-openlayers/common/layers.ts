import type { Extent } from 'ol/extent';

export const layersCommonDefaultProps = {
  // className: "ol-layer",
  opacity: 1,
  visible: true,
  properties: () => ({})
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
