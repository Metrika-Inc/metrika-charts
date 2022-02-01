export const gridStyle = {
    visible: true,
    stroke: '#E0E0E0',
    strokeWidth: 1,
};
const axisTheme = {
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
const barTheme = {
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
export const chartTheme = Object.assign(Object.assign({ chartMargins: {
        left: 16,
        bottom: 16,
        right: 16,
    } }, axisTheme), barTheme);
//# sourceMappingURL=style.js.map