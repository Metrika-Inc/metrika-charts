import { timeFormatter } from '@metrika/elastic-charts';
import * as d3 from 'd3-format';

const hoursCutoff = 1000 * 60 * 60 * 24; // 1 day
const daysCutoff = 1000 * 60 * 60 * 24 * 30 * 3; // 3 months
const HOUR_FORMATTER = (datetime: unknown) => {
   // if it is the start of a new day, write out the full day
   // TODO - investigate feasability of an improved solution to this problem
   // if (timeFormatter("HH")(datetime) === "00") {
   //   return timeFormatter("DD MMM")(datetime);
   // }

   return timeFormatter('HH:mm')(datetime);
};
const DAY_FORMATTER = (datetime: unknown) => {
   // if it is the start of a new month, write ou the full month
   // if (timeFormatter("DD")(datetime) === "01") {
   //   return timeFormatter("MMM'YY")(datetime);
   // }

   return timeFormatter('DD MMM HH:mm')(datetime);
};
const MONTH_FORMATTER = timeFormatter("MMM'YY");
export const formatForRange = (range: number) => {
   // Date formatting:
   // Hours: 23:00
   // Days: 25 JUN
   // If needed, months: JUN'21

   if (range < hoursCutoff) {
      return HOUR_FORMATTER;
   } else if (range < daysCutoff) {
      return DAY_FORMATTER;
   } else {
      return (date: unknown) => MONTH_FORMATTER(date).toUpperCase();
   }
};

// shorten values over 1 million with an M and use a single decimal place
// shorten values over 1,000 with an K and use a single decimal place
export const bigValueFormatter = (v: number): string => {
   const s = ['K', 'M', 'B'];
   for (let i = s.length - 1; i >= 0; i--) {
      if (Math.abs(v) >= Math.pow(1e3, i + 1)) {
         return (v / Math.pow(1e3, i + 1)).toFixed(2) + s[i];
      }
   }
   return v + '';
};

// composes functions from left to right
// pipe(f, g) is the same as (v: any) => f(g(v)

// eslint-disable-next-line
type F = (...args: any[]) => unknown;
const pipe =
   (...fns: F[]) =>
   (arg: unknown) =>
      fns.reduce((acc: unknown, fn: F) => (fn ? fn(acc) : acc), arg);

// convert microAlgo to Algo
const microAlgoToAlgo: TickFormatter = (uAlgo: number) => uAlgo / 1e6;
// when showing an algo address, only show the first 6 characters
const formatAlgoAddr: TickFormatter = (value: string) => value.substring(0, 6);
// to format algos, use the big value formatter
const formatAlgo: LabelFormatter = (value: number) => bigValueFormatter(value);
// to format microalgos, use the big value formatter
const formatMicroAlgo: LabelFormatter = (value: number) => bigValueFormatter(value);

export const formatTwoDecimalPlaces = (value: number) => value.toLocaleString('en-US', { maximumFractionDigits: 2 }); // value.toFixed(2);
export const formatPercent = (value: number) => d3.format('.2%')(value);
// eslint-disable-next-line
type TickFormatter = (arg0: any) => any;
// eslint-disable-next-line
type LabelFormatter = (arg0: any) => any;
interface UnitFormatters {
   [id: string]: [TickFormatter, LabelFormatter?];
}
// is the label formatter is undefined it will use the tick formatter
// if the label formatter and the tick formatter are defined,
// then the tooltip will show the value put through the tick formatter
// and the axis will shwo their values put through the label formatter
export const formattersForTypes: UnitFormatters = {
   // assume that we first have to convert from uAlgo -> Algo
   algo_algo: [pipe(microAlgoToAlgo, formatTwoDecimalPlaces), pipe(microAlgoToAlgo, formatAlgo)],
   algo_microalgo: [formatTwoDecimalPlaces, formatMicroAlgo],
   // an undefined label formatter will fall back to the tick formatter
   algo_address: [formatAlgoAddr, undefined],
   number: [formatTwoDecimalPlaces, bigValueFormatter],
   percent: [formatPercent, undefined],
};

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
export const formatNumberToFiveCharacters = (v: number): string => {
   let truncatedValue = v;
   let stringEnding = '';

   const numAsString = v + '';

   // count the number of characters not include any decimal point
   if (numAsString.split('.').reduce((a, b) => a + b).length <= 5) {
      return d3.format(',')(v);
   }
   if (v >= 1e9) {
      truncatedValue = v / 1e9;
      stringEnding = 'B';
   } else if (v >= 1e6) {
      truncatedValue = v / 1e6;
      stringEnding = 'M';
   } else if (v >= 1e3) {
      truncatedValue = v / 1e3;
      stringEnding = 'K';
   }

   const formattedValueWithEnding = d3.format(`.${5 - stringEnding.length}~`)(truncatedValue);
   const digitsAfterDecimal =
      formattedValueWithEnding.split('.').length > 1 ? formattedValueWithEnding.split('.')[1].length : 0;
   if (digitsAfterDecimal > 2) {
      return d3.format('.2f')(truncatedValue) + stringEnding;
   }
   return formattedValueWithEnding + stringEnding;
};
