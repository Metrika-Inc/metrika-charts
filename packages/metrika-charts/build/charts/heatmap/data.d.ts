import { Unit } from '../../_shared/types/units';
export declare type MapPoint = [string, number | null, number | null];
export declare type HeatmapData = MapPoint[];
export interface HeatmapMeta {
    valueId: string;
    showValueLabels?: boolean;
    yAxisName: string;
    xAxisName: string;
    yAxisUnit: Unit;
}
export interface HeatmapProps {
    data: HeatmapData;
    meta: HeatmapMeta;
}
