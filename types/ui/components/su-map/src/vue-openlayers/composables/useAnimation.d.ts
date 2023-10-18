import type { FeatureAnimationOptions, FeatureAnimation } from '@/components/animations/AnimationTypes';
type GenericFeatureAnimationOptions = Partial<Record<keyof FeatureAnimationOptions, unknown>>;
export default function useAnimation(AnimationType: new (props: Record<string, unknown>) => FeatureAnimation, props: GenericFeatureAnimationOptions): {
    map: unknown;
    vectorLayer: unknown;
    animation: import("vue").ComputedRef<FeatureAnimation>;
    properties: any;
};
export {};
