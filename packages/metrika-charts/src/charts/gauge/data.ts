import { ChartCommonProps } from '../types';

export interface GaugeData {
   actual: number;
}

export type GaugeUnit = 'GB' | 'MB' | 'bytes' | 'Ghz' | 'Mhz' | 'number' | 'percent' | 'percent100';

export interface GaugeFormat {
   valueId: string;
   /* valueUnit default is 'number' */
   valueUnit?: GaugeUnit;
   /**
    * Type choose colors from theme/defaults
    * setting bands color or actual color overrides theme colors
    **/
   type: 'ok' | 'warning' | 'error' | 'dynamic' | 'dynamic-reverse';
   typeThresholds?: number[];
   base: number;
   target?: number;
   ticks: number[];
   bands: {
      value: number;
      color?: string;
   }[];
   actualFillColor?: string;
   targetFillColor?: string;
   fontFamily?: string;
}

export interface GaugeProps extends ChartCommonProps {
   data: GaugeData;
   format: GaugeFormat;
}
