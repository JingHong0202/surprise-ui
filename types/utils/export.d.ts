import type { Plugin } from 'vue';
type component<T> = T & Plugin;
export declare const compInstall: <T extends {
    name: string;
}>(component: T) => component<T>;
export {};
