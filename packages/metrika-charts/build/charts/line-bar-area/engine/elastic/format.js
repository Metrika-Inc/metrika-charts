import { ScaleType } from '@metrika/elastic-charts';
import { formatForRange, formattersForTypes } from '../../../../_shared/format/formatting';
// handles the scale type for the x axis
export const scaleTypeForUnit = (unit) => {
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
export const formatForUnit = (unit, data) => {
    if (unit === 'datetime') {
        const series = data[0];
        // TODO - do this a better way
        if (series.length === 0) {
            return (a) => a;
        }
        const rangeMin = series[0][0];
        const rangeMax = series[series.length - 1][0];
        return formatForRange(rangeMax - rangeMin);
    }
    return formattersForTypes[unit][0];
};
//# sourceMappingURL=format.js.map