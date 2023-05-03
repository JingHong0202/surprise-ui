export type VirtualPropType = {
    /** 渲染数据数组 */
    data: any[];
    /** 子元素大小 */
    itemSize: number;
    /** 列表缓存，减少滚动太快出现空白 */
    buffer?: number;
    /** 设置数据 v-for key */
    keyName: string;
};
declare const _default: {
    itemSize: number;
    buffer: number;
    keyName: string;
};
export default _default;
