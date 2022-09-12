import { Datum, ScaleType, XScaleType } from '@metrika/elastic-charts';
import { formatForRange, formattersForTypes } from '../../../../_shared/format/formatting';
import { Unit } from '../../../../_shared/types/units';
import { Serie } from '../../data';

// handles the scale type for the x axis
export const scaleTypeForUnit = (unit: Unit): XScaleType => {
   if (unit === 'datetime') {
      return ScaleType.Time;
   }
   if (unit === 'number' || unit === 'percent') {
      return ScaleType.Linear;
   }
   return ScaleType.Ordinal;
};

/**
 * Used to determine the formatting function for a given unit
 * The datetime unit takes into account the time range of the data
 * @param unit Unit of the data
 * @param data The data of the graph
 * @returns
 */
export const formatForUnit = (unit: Unit, data: Serie[]) => {
   if (unit === 'datetime') {
      const series = data.find((s) => s.length > 0);
      // TODO - do this a better way
      if (!series || series.length === 0) {
         return (a: Datum) => a;
      }
      const rangeMin = series[0][0];
      const rangeMax = series[series.length - 1][0];
      return formatForRange(rangeMax - rangeMin);
   }
   return formattersForTypes[unit][0];
};
