const MetrikaPalette = ['#3A87BF', '#002845', '#60A4D0', '#01487B', '#94C3DD', '#146BAB'];

export const metrikaTheme = {
   data: {
      colors: MetrikaPalette,
   },
} as const;

export type Theme = typeof metrikaTheme;
