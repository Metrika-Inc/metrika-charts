export declare type Slice = {
    [k: string]: string | number;
};
export declare type DonutData = Slice[];
export interface DonutLayer {
    groupByKey: string;
}
export interface DonutMeta {
    showLabels: boolean;
    valueKey: string;
    layers: DonutLayer[];
}
export interface DonutProps {
    data: DonutData;
    meta: DonutMeta;
}
