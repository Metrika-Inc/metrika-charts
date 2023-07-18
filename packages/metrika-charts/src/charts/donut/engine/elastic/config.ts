import { PartialTheme, PartitionLayout } from '@metrika/elastic-charts';
import { Config } from '@metrika/elastic-charts/dist/_es6/chart_types/partition_chart/layout/types/config_types';
import { RecursivePartial } from '@metrika/elastic-charts/dist/_es6/utils/common';
import { Theme } from '../../../../_shared';
import { DonutFormat } from '../../data';

export function getElasticDonutTheme(theme: Theme): PartialTheme {
   return {
      background: {
         color: theme.chart.donut.background.color,
      },
      legend: {
         margin: 16,
         spacingBuffer: 16,
      },
      chartMargins: {
         left: 16,
         right: 16,
         top: 16,
         bottom: 16,
      },
      chartPaddings: {
         left: 16,
         right: 16,
         top: 16,
         bottom: 16,
      },
   };
}
export function getElasticDonutConfig(theme: Theme, format: DonutFormat): RecursivePartial<Config> {
   return {
      partitionLayout: PartitionLayout.sunburst,
      linkLabel: {
         fontSize: 14,
         maximumSection: format.showLabels ? 2 : Infinity, // no labels
         maxCount: 0,
      },
      fontFamily: theme.chart.donut.fontFamily,
      fillLabel: {
         valueFormatter: (d: number) => d.toString(),
         fontStyle: 'normal',
         fontFamily: theme.chart.donut.fontFamily,
      },
      margin: { top: 0.1, bottom: 0.1, left: 0.1, right: 0.1 },
      minFontSize: 1,
      idealFontSizeJump: 1.1,
      outerSizeRatio: 1, // - 0.5 * Math.random(),
      emptySizeRatio: 0.66,
      circlePadding: 4,
      //   backgroundColor: 'rgba(229,229,229,1)',
      specialFirstInnermostSector: false,
      clockwiseSectors: true,
   };
}
