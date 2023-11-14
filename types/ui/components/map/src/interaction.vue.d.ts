/** __vue_virtual_code_placeholder */
import { Style } from 'ol/style.js';
import { type SelectEvent } from 'ol/interaction/Select.js';
import { type DrawEvent } from 'ol/interaction/Draw.js';
import { Geometry } from 'ol/geom.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import { FeatureLike } from 'ol/Feature.js';
import { type Options as DrawOptions } from 'ol/interaction/Draw';
import { type Options as SelectOptions } from 'ol/interaction/Select';
import { type Options as ModifyOptions } from 'ol/interaction/Modify';
import { StyleLike } from 'ol/style/Style.js';
import { Options as LayerOptions } from 'ol/layer/Layer';
import { Options as SourceOptions } from 'ol/source/Vector';
declare function exportFeatures(): any;
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 是否开启绘制 */
    drawEnabled?: boolean | undefined;
    /** 绘画类型 */
    drawOptions?: Partial<DrawOptions> | undefined;
    modifyOptions?: Partial<ModifyOptions> | undefined;
    selectOptions?: Partial<SelectOptions> | undefined;
    /** 是否开启编辑 */
    modifyEnabled?: boolean | undefined;
    /** 是否开启选择 */
    selectEnabled?: boolean | undefined;
    geojsonObject?: object | undefined;
    layerOptions?: LayerOptions<VectorSource<Geometry>> | undefined;
    sourceOptions?: SourceOptions<Geometry> | undefined;
    selectStyleFun?: ((fetrue: FeatureLike, currentStyle: Style, resolution: number) => StyleLike) | undefined;
}>, {
    drawEnabled: boolean;
    modifyEnabled: boolean;
    selectEnabled: boolean;
    drawOptions: () => {};
    modifyOptions: () => {};
    selectOptions: () => {};
    sourceOptions: () => {};
    layerOptions: () => {};
    selectStyleFun: (feature: FeatureLike) => Style[];
}>, {
    interface: {
        source: VectorSource<Geometry>;
        layer: VectorLayer<VectorSource<Geometry>>;
    };
    draw: import("vue").Ref<import("ol/interaction/Draw").default | undefined>;
    modify: import("vue").Ref<import("ol/interaction/Modify").default | undefined>;
    select: import("vue").Ref<import("ol/interaction/Select").default | undefined>;
    exportFeatures: typeof exportFeatures;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    modifyend: (arg: any) => void;
    modifystart: (arg: any) => void;
    drawstart: (arg: DrawEvent) => void;
    drawend: (arg: DrawEvent) => void;
    "update:modifyEnabled": (arg: any) => void;
    "update:drawEnabled": (arg: any) => void;
    selectChange: (e: SelectEvent | null, features: any[]) => void;
    deled: (e: KeyboardEvent) => void;
    setId: (e: string | number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 是否开启绘制 */
    drawEnabled?: boolean | undefined;
    /** 绘画类型 */
    drawOptions?: Partial<DrawOptions> | undefined;
    modifyOptions?: Partial<ModifyOptions> | undefined;
    selectOptions?: Partial<SelectOptions> | undefined;
    /** 是否开启编辑 */
    modifyEnabled?: boolean | undefined;
    /** 是否开启选择 */
    selectEnabled?: boolean | undefined;
    geojsonObject?: object | undefined;
    layerOptions?: LayerOptions<VectorSource<Geometry>> | undefined;
    sourceOptions?: SourceOptions<Geometry> | undefined;
    selectStyleFun?: ((fetrue: FeatureLike, currentStyle: Style, resolution: number) => StyleLike) | undefined;
}>, {
    drawEnabled: boolean;
    modifyEnabled: boolean;
    selectEnabled: boolean;
    drawOptions: () => {};
    modifyOptions: () => {};
    selectOptions: () => {};
    sourceOptions: () => {};
    layerOptions: () => {};
    selectStyleFun: (feature: FeatureLike) => Style[];
}>>> & {
    onDrawend?: ((arg: DrawEvent) => any) | undefined;
    onDrawstart?: ((arg: DrawEvent) => any) | undefined;
    onModifyend?: ((arg: any) => any) | undefined;
    onModifystart?: ((arg: any) => any) | undefined;
    onSelectChange?: ((e: SelectEvent | null, features: any[]) => any) | undefined;
    "onUpdate:modifyEnabled"?: ((arg: any) => any) | undefined;
    "onUpdate:drawEnabled"?: ((arg: any) => any) | undefined;
    onDeled?: ((e: KeyboardEvent) => any) | undefined;
    onSetId?: ((e: string | number) => any) | undefined;
}, {
    selectStyleFun: (fetrue: FeatureLike, currentStyle: Style, resolution: number) => StyleLike;
    drawEnabled: boolean;
    drawOptions: Partial<DrawOptions>;
    modifyOptions: Partial<ModifyOptions>;
    selectOptions: Partial<SelectOptions>;
    modifyEnabled: boolean;
    selectEnabled: boolean;
    layerOptions: LayerOptions<VectorSource<Geometry>>;
    sourceOptions: SourceOptions<Geometry>;
}, {}>;
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
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
