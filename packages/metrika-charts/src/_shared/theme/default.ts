import { GaugeDefaultTheme } from '../../charts/gauge/theme';

const MetrikaPalette = ['#3A87BF', '#002845', '#60A4D0', '#cfdfea', '#94C3DD', '#146BAB'];

const baseChartTheme = {
   fontFamily: 'IBM Plex Mono',
   background: {
      color: 'transparent',
   },
};

export const metrikaTheme = {
   name: 'metrika',
   data: {
      colors: MetrikaPalette,
   },
   chart: {
      donut: {
         ...baseChartTheme,
      },
      linebar: {
         ...baseChartTheme,
      },
      heatmap: {
         ...baseChartTheme,
      },
      treemap: {
         ...baseChartTheme,
      },
      gauge: GaugeDefaultTheme,
   },
} as const;

export type Theme = typeof metrikaTheme & {
   name: string;
};
