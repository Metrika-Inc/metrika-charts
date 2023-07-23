import { ChartCommonProps } from '../types';

export type Slice = {
   [k: string]: string | number;
};

export type DonutData = Slice[];

export interface DonutLayer {
   layerName?: string;
   sliceKey: string;
   valueKey: string;
}

export type DonutEngine = 'elastic' | 'echarts' | 'nivo';

export interface DonutFormat {
   engine?: DonutEngine;
   renderer?: 'svg' | 'canvas';
   //format
   showLabels: boolean;
   layers: DonutLayer[];
   // override slices names
   labels?: {
      [sliceKey: string]: string;
   };
   // override slices colors
   colors?: {
      [sliceKey: string]: string;
   };
   // override slices colors for dark theme
   colorsDark?: {
      [sliceKey: string]: string;
   };
}

export interface DonutProps extends ChartCommonProps {
   data: DonutData;
   format: DonutFormat;
}
