import { GridLineStyle, PartialTheme } from '@metrika/elastic-charts';

export const gridStyle: Partial<GridLineStyle> = {
   visible: true,
   stroke: '#E0E0E0',
   strokeWidth: 1,
};

const axisTheme: Pick<PartialTheme, 'axes'> = {
   axes: {
      axisTitle: {
         fill: '#393939',
         fontSize: 12,
         fontStyle: 'normal',
         fontFamily: 'IBM Plex Mono',
      },
      axisLine: {
         stroke: '#E0E0E0',
         strokeWidth: 1,
      },
      tickLabel: {
         fill: '#161616',
         fontSize: 10,
         fontFamily: 'IBM Plex Mono',
         fontStyle: 'normal',
      },
      tickLine: {
         visible: true,
         stroke: '#8D8D8D',
         strokeWidth: 1,
         size: 4,
      },
   },
};

const barTheme: Pick<PartialTheme, 'barSeriesStyle'> = {
   barSeriesStyle: {
      displayValue: {
         fontSize: 10,
         fontFamily: 'IBM Plex Mono',
         fontStyle: 'normal',
         padding: 0,
         fill: '#161616',
         alignment: {
            vertical: 'middle',
         },
      },
   },
};

export const chartTheme: PartialTheme = {
   chartMargins: {
      left: 16,
      bottom: 16,
      right: 16,
   },
   ...axisTheme,
   ...barTheme,
};
