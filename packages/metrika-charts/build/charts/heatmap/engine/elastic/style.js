export const HEATMAP_STYLE = {
    // NOTE: margins not implemented by elastic
    // margin: {
    //     left: 16,
    //     bottom: 16,
    // },
    grid: {
        cellHeight: {
            min: 0,
            max: 'fill',
        },
        stroke: {
            width: 0,
            color: '#D3DAE6',
        },
    },
    cell: {
        maxWidth: 'fill',
        maxHeight: 50,
        border: {
            stroke: '#D3DAE6',
            strokeWidth: 0,
        },
    },
    yAxisLabel: {
        visible: true,
        width: 'auto',
        fontFamily: 'IBM Plex Mono',
        fontSize: 10,
        padding: { left: 10, right: 10 },
    },
    xAxisLabel: {
        position: 'top',
        labelRotation: -90,
        fontFamily: 'IBM Plex Mono',
        fontSize: 10,
    },
};
//# sourceMappingURL=style.js.map