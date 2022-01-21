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
        donut: Object.assign({}, baseChartTheme),
        linebar: Object.assign({}, baseChartTheme),
        heatmap: Object.assign({}, baseChartTheme),
        treemap: Object.assign({}, baseChartTheme),
    },
};
//# sourceMappingURL=default.js.map