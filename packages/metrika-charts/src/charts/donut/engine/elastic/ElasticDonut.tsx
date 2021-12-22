import { Chart, Position, Settings, Partition, Datum, PartitionLayout } from '@metrika/elastic-charts';
import React from 'react';
import { DonutProps } from '../../data';
import { indexInterpolatedFillColor, interpolatorCET2s, STORYBOOK_LIGHT_THEME } from './colors';

const ElasticDonut: React.FC<DonutProps> = ({ data, meta }) => {
   return (
      <Chart>
         <Settings theme={STORYBOOK_LIGHT_THEME} showLegend={true} legendPosition={Position.Right} legendMaxDepth={1} />
         <Partition
            id="receiver"
            data={data}
            valueAccessor={(d: Datum) => d[meta.valueKey] as number}
            //   valueFormatter=
            layers={meta.layers.map((l) => ({
               groupByRollup: (d: Datum) => d[l.groupByKey],
               nodeLabel: (d: Datum) => d,
               fillLabel: { textInvertible: true },
               shape: {
                  fillColor: (d) =>
                     // pick color from color palette based on mean angle - rather distinct colors in the inner ring
                     indexInterpolatedFillColor(interpolatorCET2s)(d, (d.x0 + d.x1) / 2 / (2 * Math.PI), []),
               },
            }))}
            config={{
               partitionLayout: PartitionLayout.sunburst,
               linkLabel: {
                  //  maxCount: 32,
                  fontSize: 14,
                  maximumSection: meta.showLabels ? undefined : Infinity, // no labels
                  maxCount: 0,
               },
               fontFamily: 'IBM Plex Mono',
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
            }}
         />
      </Chart>
   );
};

export default ElasticDonut;
