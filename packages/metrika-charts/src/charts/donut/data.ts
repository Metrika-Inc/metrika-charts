import { ChartCommonProps } from '../types';

export type Slice = {
   [k: string]: string | number;
};

export type DonutData = Slice[];

export interface DonutLayer {
   groupByKey: string;
}

export interface DonutFormat {
   showLabels: boolean;
   valueKey: string;
   layers: DonutLayer[];
   labels?: {
      [name: string]: string;
   };
   colors?: {
      [name: string]: string;
   };
}

export interface DonutProps extends ChartCommonProps {
   data: DonutData;
   format: DonutFormat;
}
