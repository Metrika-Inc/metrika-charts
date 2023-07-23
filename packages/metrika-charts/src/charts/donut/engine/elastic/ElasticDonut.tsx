import { Chart, Position, Settings, Partition, Datum } from '@metrika/elastic-charts';
import { PrimitiveValue } from '@metrika/elastic-charts/dist/_es6/chart_types/partition_chart/layout/utils/group_by_rollup';
import React, { useCallback, useMemo } from 'react';
import { useTheme, useUniqueId } from '../../../../_shared';
import { DonutProps } from '../../data';
import { indexInterpolatedFillColor, interpolatorCET2s } from './colors';
import { getElasticDonutConfig, getElasticDonutTheme } from './config';

const ElasticDonut: React.FC<DonutProps> = ({ data, format }) => {
   const theme = useTheme();
   const uId = useUniqueId();

   const config = useMemo(() => getElasticDonutConfig(theme, format), [theme, format]);
   const donutTheme = useMemo(() => getElasticDonutTheme(theme), [theme]);

   const layers = useMemo(
      () =>
         format.layers.map((l) => ({
            groupByRollup: (d: Datum) => d[l.sliceKey],
            nodeLabel: (key: PrimitiveValue) => {
               const keyString = `${key}`;
               return format.labels && format.labels[keyString] ? format.labels[keyString] : keyString;
            },

            fillLabel: { textInvertible: false },
            shape: {
               fillColor: (d) => {
                  if (format.colors && format.colors[d['dataName']]) {
                     return format.colors[d['dataName']];
                  }
                  // pick color from color palette based on mean angle - rather distinct colors in the inner ring
                  return indexInterpolatedFillColor(interpolatorCET2s)(d, (d.x0 + d.x1) / 2 / (2 * Math.PI), []);
               },
            },
         })),
      [format.colors, format.labels, format.layers],
   );

   const valueAccessor = useCallback(
      (d: Datum) => (format.layers[0].valueKey ? (d[format.layers[0].valueKey] as number) : 0),
      [format.layers],
   );

   return (
      <Chart>
         <Settings theme={donutTheme} showLegend={true} legendPosition={Position.Left} legendMaxDepth={1} />
         <Partition id={uId} data={data} valueAccessor={valueAccessor} layers={layers} config={config} />
      </Chart>
   );
};

export default ElasticDonut;
