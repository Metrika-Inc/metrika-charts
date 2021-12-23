import { Chart, Position, Settings, Partition, Datum } from '@metrika/elastic-charts';
import React, { useMemo } from 'react';
import { useTheme } from '../../../../_shared';
import { DonutProps } from '../../data';
import { indexInterpolatedFillColor, interpolatorCET2s } from './colors';
import { getElasticDonutConfig, getElasticDonutTheme } from './config';

const ElasticDonut: React.FC<DonutProps> = ({ data, meta }) => {
   const theme = useTheme();
   const config = useMemo(() => getElasticDonutConfig(theme, meta), [theme, meta]);
   const donutTheme = useMemo(() => getElasticDonutTheme(theme), [theme]);

   return (
      <Chart>
         <Settings theme={donutTheme} showLegend={true} legendPosition={Position.Right} legendMaxDepth={1} />
         <Partition
            id="id-1"
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
            config={config}
         />
      </Chart>
   );
};

export default ElasticDonut;
