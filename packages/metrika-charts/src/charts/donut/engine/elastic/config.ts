import { PartialTheme, PartitionLayout } from '@metrika/elastic-charts';
import { Config } from '@metrika/elastic-charts/dist/_es6/chart_types/partition_chart/layout/types/config_types';
import { RecursivePartial } from '@metrika/elastic-charts/dist/_es6/utils/common';
import { Theme } from '../../../../_shared';
import { DonutMeta } from '../../data';
export function getElasticDonutTheme(theme: Theme): PartialTheme {
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
export function getElasticDonutConfig(theme: Theme, meta: DonutMeta): RecursivePartial<Config> {
   return {
      partitionLayout: PartitionLayout.sunburst,
      linkLabel: {
         //  maxCount: 32,
         fontSize: 14,
         maximumSection: meta.showLabels ? undefined : Infinity, // no labels
         maxCount: 0,
      },
      fontFamily: theme.chart.donut.fontFamily,
      fillLabel: {
         valueFormatter: (d: number) => d,
         fontStyle: 'normal',
      },
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
      minFontSize: 1,
      idealFontSizeJump: 1.1,
      outerSizeRatio: 1, // - 0.5 * Math.random(),
      emptySizeRatio: 0.3,
      circlePadding: 4,
      backgroundColor: 'rgba(229,229,229,1)',
      specialFirstInnermostSector: false,
      clockwiseSectors: true,
   };
}
