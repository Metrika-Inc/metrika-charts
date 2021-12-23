const MetrikaPalette = ['#3A87BF', '#002845', '#60A4D0', '#01487B', '#94C3DD', '#146BAB'];

const baseChartTheme = {
   fontFamily: 'IBM Plex Mono',
   background: {
      color: 'transparent',
   },
};

export const metrikaTheme = {
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
   },
} as const;

export type Theme = typeof metrikaTheme;
