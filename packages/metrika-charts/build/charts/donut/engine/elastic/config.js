import { PartitionLayout } from '@metrika/elastic-charts';
export function getElasticDonutTheme(theme) {
    return {
        background: {
            color: theme.chart.donut.background.color,
        },
        legend: {
            margin: 20,
            spacingBuffer: 50,
        },
        chartMargins: {
            right: 20,
            top: 20,
            bottom: 20,
        },
    };
}
export function getElasticDonutConfig(theme, meta) {
    return {
        partitionLayout: PartitionLayout.sunburst,
        linkLabel: {
            //  maxCount: 32,
            fontSize: 14,
            maximumSection: meta.showLabels ? undefined : Infinity,
            maxCount: 0,
        },
        fontFamily: theme.chart.donut.fontFamily,
        fillLabel: {
            valueFormatter: (d) => d,
            fontStyle: 'normal',
        },
        margin: { top: 0, bottom: 0, left: 0, right: 0 },
        minFontSize: 1,
        idealFontSizeJump: 1.1,
        outerSizeRatio: 1,
        emptySizeRatio: 0.3,
        circlePadding: 4,
        backgroundColor: 'rgba(229,229,229,1)',
        specialFirstInnermostSector: false,
        clockwiseSectors: true,
    };
}
//# sourceMappingURL=config.js.map