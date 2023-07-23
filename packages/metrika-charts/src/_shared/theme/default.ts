import { GaugeDefaultTheme } from '../../charts/gauge/theme';

const MetrikaPalette = ['#3A87BF', '#002845', '#60A4D0', '#cfdfea', '#94C3DD', '#146BAB'];

export type Theme = {
   name: string;
   isDark?: boolean;
   data: {
      colors: string[];
   };
   base: {
      fontFamily: string;
      background: {
         color: string;
      };
   };
   chart: {
      // eslint-disable-next-line @typescript-eslint/ban-types
      donut: {};
      // eslint-disable-next-line @typescript-eslint/ban-types
      linebar: {};
      // eslint-disable-next-line @typescript-eslint/ban-types
      heatmap: {};
      // eslint-disable-next-line @typescript-eslint/ban-types
      treemap: {};
      gauge: typeof GaugeDefaultTheme;
   };
};

export const metrikaTheme: Theme = {
   name: 'metrika',
   isDark: false,
   data: {
      colors: MetrikaPalette,
   },
   base: {
      fontFamily: 'IBM Plex Mono',
      background: {
         color: 'transparent',
      },
   },
   chart: {
      donut: {},
      linebar: {},
      heatmap: {},
      treemap: {},
      gauge: GaugeDefaultTheme,
   },
};

export const metrikaThemeDark: Theme = {
   name: 'metrikaDark',
   isDark: true,
   data: {
      colors: MetrikaPalette,
   },
   base: {
      fontFamily: 'IBM Plex Mono',
      background: {
         color: '#333333',
      },
   },
   chart: {
      donut: {},
      linebar: {},
      heatmap: {},
      treemap: {},
      gauge: GaugeDefaultTheme,
   },
};
