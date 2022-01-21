export declare const formatForRange: (range: number) => (datetime: unknown) => string;
export declare const bigValueFormatter: (v: number) => string;
export declare const formatTwoDecimalPlaces: (value: number) => string;
export declare const formatPercent: (value: number) => string;
declare type TickFormatter = (arg0: any) => any;
declare type LabelFormatter = (arg0: any) => any;
interface UnitFormatters {
    [id: string]: [TickFormatter, LabelFormatter?];
}
export declare const formattersForTypes: UnitFormatters;
/**
 * For statistics we want to format numbers so that they fit nicely
 * This has been decided to mean turning the numbers into a string of 5 or less digit and letter characters (exclude . and ,)
 * This will be accomplished by using an ending 'K', 'M', and 'B' when neccesary to shorten the value,
 * and cutting off decimal places to reach the desired length
 * 1 000 000 -> '1M'
 * 10 000 000 -> '10M'
 * 12 345 000 -> '12.34M'
 *
 * If the value can be formatted without any truncation, always do that
 * Add commas to large values
 * 1 000 -> '1,000' (not 1K)
 * 1 000.3 -> '1,000.3'
 *
 * If possible, never show more than 2 decimal places, unless it whipes out the number.
 * 1 234.567 -> '1.23K
 * 1 234 567 -> '1.23M'
 *
 * Also cut off any trailing zeros that are unneccesary.
 * @param v The number to format
 * @returns The formatted value as a string
 */
export declare const formatNumberToFiveCharacters: (v: number) => string;
export {};
