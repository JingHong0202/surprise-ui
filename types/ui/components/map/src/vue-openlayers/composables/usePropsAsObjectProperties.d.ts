import { type ToRefs } from 'vue';
export default function usePropsAsObjectProperties<T extends Record<string, unknown>>(props: T, ignoredKeys?: string[]): {
    properties: import("vue").UnwrapNestedRefs<ToRefs<T>>;
};
