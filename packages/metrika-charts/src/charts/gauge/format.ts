import * as d3 from 'd3-format';
import { GaugeUnit } from './data';

export function gaugeFormat(value: number, valueUnit?: GaugeUnit): string {
   if (valueUnit === 'bytes') return `${d3.format('.2f')(value / 1024 / 1024)} MB`;
   if (valueUnit === 'MB') return `${d3.format('.2f')(value / 1024)} GB`;
   if (valueUnit === 'GB') return `${d3.format('.2f')(value)} GB`;
   if (valueUnit === 'Mhz') return `${d3.format('.2f')(value / 1024)} Ghz`;
   if (valueUnit === 'Ghz') return `${d3.format('.2f')(value)} Ghz`;
   if (valueUnit === 'percent') return `${d3.format('.0f')(value)} %`;
   if (valueUnit === 'percent100') return `${d3.format('.0f')(value)} %`;
   return String(value);
}
