import { XScaleType } from '@metrika/elastic-charts';
import { Unit } from '../../../../_shared/types/units';
import { Serie } from '../../data';
export declare const scaleTypeForUnit: (unit: Unit) => XScaleType;
/**
 * Used to determine the formatting function for a given unit
 * The datetime unit takes into account the time range of the data
 * @param unit Unit of the data
 * @param data The data of the graph
 * @returns
 */
export declare const formatForUnit: (unit: Unit, data: Serie[]) => (arg0: any) => any;
