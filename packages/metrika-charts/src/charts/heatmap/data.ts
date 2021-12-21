import { Unit } from '../../_shared/types/units';

export type MapPoint = [string, number | null, number | null];

export type HeatmapData = MapPoint[];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeatmapMeta {
   valueId: string;
   showValueLabels: boolean;
   yAxisName: string;
   xAxisName: string;
   yAxisUnit: Unit;
}

export interface HeatmapProps {
   data: HeatmapData;
   meta: HeatmapMeta;
}
