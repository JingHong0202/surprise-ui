import type { PanIntoViewOptions, Positioning } from 'ol/Overlay';
import Overlay from 'ol/Overlay.js';
import type { Coordinate } from 'ol/coordinate';
export default function useOverlay(props: Record<string, unknown>, emit: (ev: 'elementChanged' | 'offsetChanged' | 'positionChanged' | 'positioningChanged', ...args: any[]) => void): {
    overlay: import("vue").ComputedRef<Overlay>;
    htmlContent: import("vue").Ref<HTMLElement | undefined>;
    getOffset: () => number[];
    getPosition: () => Coordinate | undefined;
    getPositioning: () => Positioning;
    panIntoView: (optPanIntoViewOptions: PanIntoViewOptions) => void;
    setElement: (element: HTMLElement | undefined) => void;
    setOffset: (offset: number[]) => void;
    setPosition: (position?: Coordinate) => void;
    setPositioning: (positioning: Positioning) => void;
};
