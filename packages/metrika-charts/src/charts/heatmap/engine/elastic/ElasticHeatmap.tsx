import { Chart as MetrikaChart, Heatmap, RecursivePartial, ScaleType, Settings } from '@metrika/elastic-charts';
import { Config } from '@metrika/elastic-charts/dist/chart_types/heatmap/layout/types/config_types';
import * as merge from 'deepmerge';
import React, { useMemo } from 'react';
import { formatForRange, formattersForTypes } from '../../../../_shared/format/formatting';
import { HeatmapData, HeatmapMeta } from '../../data';
import { HEATMAP_STYLE } from './style';

const ElasticHeatmap = (props: { data: HeatmapData; meta: HeatmapMeta; className?: string }) => {
   const className = props.className;
   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
   // @ts-ignore
   const graphData = props.data;
   // const chart = props.chart;

   // finds the oldest time in the heatmap
   const emptyData = graphData.length === 0;

   const timeSet = new Set<number>();
   graphData.forEach((datum) => timeSet.add(datum[1] as number));
   const timeArr = Array.from(timeSet).sort();
   const minTime = timeArr[0];
   const timeDiff = timeArr[1] - timeArr[0];
   // we add the time interval to the max time so that the last value in the chart gets its space
   const maxTime = timeDiff + timeArr.slice(-1)[0];

   const timeFormatter = formatForRange(maxTime - minTime);
   const yAxisUnit = props.meta?.yAxisUnit ?? '';
   const formats = formattersForTypes[yAxisUnit];

   const config: RecursivePartial<Config> = useMemo(
      // combine the static HEATMAP_STYLE with the dyanmic styling
      () =>
         merge.all([
            HEATMAP_STYLE,
            {
               cell: {
                  label: {
                     visible: !!props.meta.showValueLabels,
                     maxWidth: 'fill',
                  },
               },
               yAxisLabel: {
                  name: props.meta.yAxisName,
                  formatter: formats ? formats[1] ?? formats[0] : undefined,
               },
               xAxisLabel: {
                  name: props.meta.xAxisName,
                  formatter: (value: string | number) => {
                     return timeFormatter(value);
                  },
               },
            },
         ]),
      [props.meta.showValueLabels, timeFormatter, formats, props.meta.yAxisName, props.meta.xAxisName],
   );

   if (emptyData) {
      return null;
   }
   return (
      <MetrikaChart className={className}>
         <Settings
            // showLegend
            // legendPosition="top"
            // brushAxis="both"
            xDomain={{ min: minTime, max: maxTime }}
         />
         <Heatmap
            id={props.meta.valueId}
            colorScale={ScaleType.Linear}
            colors={['#ffffff', '#3096D8']}
            data={graphData}
            xAccessor={1}
            yAccessor={0}
            valueAccessor={2}
            valueFormatter={(d) => (d ? d.toFixed(2) : (d as unknown as string))}
            ySortPredicate="numAsc"
            xScaleType={ScaleType.Time}
            config={config}
         />
      </MetrikaChart>
   );
};

export default ElasticHeatmap;
