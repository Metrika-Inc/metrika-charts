import { ChartCommonProps } from '../types';

export interface GaugeData {
   actual: number;
}

export interface GaugeFormat {
   /**
    * Type choose colors from theme/defaults
    * setting bands color or actual color overrides theme colors
    **/
   type: 'ok' | 'warning' | 'error';
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
