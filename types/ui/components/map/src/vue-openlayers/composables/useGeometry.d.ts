import type { Class } from '@/components/animations/AnimationTypes';
export default function useGeometry(GeometryType: Class, props: Record<string, unknown>): {
    geometry: import("vue").ComputedRef<any>;
};
