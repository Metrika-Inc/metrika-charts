import { Datum } from '@metrika/charts';
import { formatForRange, formattersForTypes } from '../../../../_shared/format/formatting';
import { Unit } from '../../../../_shared/types/units';
import { Serie } from '../../data';

/**
 * Used to determine the formatting function for a given unit
 * The datetime unit takes into account the time range of the data
 * @param unit Unit of the data
 * @param data The data of the graph
 * @returns
 */
export const formatForUnit = (unit: Unit, data: Serie[]) => {
   if (unit === 'datetime') {
      const series = data[0];
      // TODO - do this a better way
      if (series.length === 0) {
         return (a: Datum) => a;
      }
      const rangeMin = series[0][0];
      const rangeMax = series[series.length - 1][0];
      return formatForRange(rangeMax - rangeMin);
   }
   return formattersForTypes[unit][0];
};
