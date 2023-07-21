import type { EChartsOption } from 'echarts';
import { PieChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent, LegendPlainComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { Opts } from 'echarts-for-react/src/types';
import React, { useMemo } from 'react';
import { useTheme } from '../../../../_shared';
import { useResizeObserver } from '../../../../_shared/useResizeObserver';
import { DonutProps } from '../../data';

echarts.use([TooltipComponent, PieChart, CanvasRenderer, LegendComponent, LegendPlainComponent]);

const defaultEchartsOpts: Opts = {
   renderer: 'canvas',
};

export const EchartsDonut: React.FC<DonutProps> = ({ data, format }) => {
   const theme = useTheme();
   const [divRef, size] = useResizeObserver<HTMLDivElement>();

   const currentData: { name: string; value: number }[] = React.useMemo(() => {
      return format.layers.length > 0
         ? data.map((d) => ({
              value: Number(d[format.valueKey]),
              name:
                 format.labels && format.labels[d[format.layers[0].groupByKey]]
                    ? format.labels[d[format.layers[0].groupByKey]]
                    : String(d[format.layers[0].groupByKey]),
           }))
         : [];
   }, [data, format.valueKey, format.layers, format.labels]);

   const serieName = format.layersNames && format.layersNames.length > 0 ? format.layersNames[0] : '';

   const chartOptions: EChartsOption = useMemo(
      () => ({
         tooltip: {
            trigger: 'item',
            formatter: serieName ? '{a} <br/><b>{b}</b>: {c} ({d}%)' : '<b>{b}</b>: {c} ({d}%)',
         },
         legend: {
            mainType: 'legend',
            orient: 'horizontal',
            align: 'auto',
            itemGap: 16,
            padding: 16,
            textStyle: {
               fontSize: 12,
               fontWeight: 'normal',
               fontFamily: theme.chart.donut.fontFamily,
            },
         },
         percentPrecision: 2,
         series: [
            {
               name: serieName,
               type: 'pie',
               radius: size.width > 0 && size.width < 480 ? ['33%', '50%'] : ['66%', '100%'],
               avoidLabelOverlap: true,
               label: {
                  show: true,
                  fontSize: 12,
                  fontWeight: 'normal',
                  fontFamily: theme.chart.donut.fontFamily,
                  formatter: '{b}: {d}%',
               },
               emphasis: {
                  label: {
                     show: true,
                     fontSize: 14,
                     fontWeight: 'bold',
                     fontFamily: theme.chart.donut.fontFamily,
                  },
               },
               labelLine: {
                  length: 16,
               },
               data: currentData,
               left: 16,
               top: 64,
               right: 16,
               bottom: 32,
            },
         ],
      }),
      [currentData, serieName, size.width, theme.chart.donut.fontFamily],
   );

   const onEvents = useMemo(
      () => ({
         finished: (e) => {
            //     console.log('finished', e);
         },
         rendered: (e) => {
            //   console.log('rendered', e);
         },
      }),
      [],
   );
   return (
      <div style={{ height: '100%', width: '100%' }} ref={divRef}>
         {size.width > 0 && size.height > 0 ? (
            <ReactEChartsCore
               style={{ height: '100%', width: '100%' }}
               echarts={echarts}
               option={chartOptions}
               notMerge={true}
               lazyUpdate={true}
               theme={theme.name}
               onEvents={onEvents}
               opts={defaultEchartsOpts}
            />
         ) : null}
      </div>
   );
};
