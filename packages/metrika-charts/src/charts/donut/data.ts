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

export type DonutEngine = 'elastic' | 'echarts';

export interface DonutFormat {
   engine?: DonutEngine;
   renderer?: 'svg' | 'canvas';
   //format
   showLabels: boolean;
   layers: DonutLayer[];
   // override slices names
   labels?: Record<string, string>;
   // override slices colors
   colors?: Record<string, string>;
   // override slices colors for dark theme
   colorsDark?: Record<string, string>;
   hideLegend?: boolean;
}

export interface DonutProps extends ChartCommonProps {
   data: DonutData;
   format: DonutFormat;
}
