import { PartialTheme } from '@metrika/elastic-charts';
import { palettes } from './palette';

type ColorMaker = (x: number) => string;

export const indexInterpolatedFillColor = (colorMaker: ColorMaker) => (d: any, i: number, a: any[]) =>
   colorMaker(i / (a.length + 1));

export function hueInterpolator(colors: any[]) {
   return (d: number) => {
      const index = Math.round(d * 255);
      const [r, g, b, a] = colors[index];
      return colors[index].length === 3 ? `rgb(${r},${g},${b})` : `rgba(${r},${g},${b},${a ?? 1})`;
   };
}
export const interpolatorCET2s = hueInterpolator(palettes.CET2s.map(([r, g, b]) => [r, g, b, 0.8]));
