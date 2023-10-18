import { type Ref, type ComputedRef } from 'vue';
import { ObjectEvent } from 'ol/Object.js';
export declare const COMMON_EVENTS: string[];
export declare const TILE_SOURCE_EVENTS: string[];
export declare const IMAGE_SOURCE_EVENTS: string[];
export declare const FEATURE_EVENTS: string[];
type EventCallback = (event: ObjectEvent) => void;
type OpenLayersFeature = {
    on: (event: string, callback: EventCallback) => void;
    un: (event: string, callback: EventCallback) => void;
} & any;
export declare function useOpenLayersEvents(feature: OpenLayersFeature | Ref<OpenLayersFeature> | ComputedRef<OpenLayersFeature>, eventNames: string[]): void;
export {};
