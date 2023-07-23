import type { EChartsOption } from 'echarts';
import { PieChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent, LegendPlainComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers';
import type { PieDataItemOption } from 'echarts/types/src/chart/pie/PieSeries';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import type { Opts } from 'echarts-for-react/src/types';
import React, { useMemo } from 'react';
import { useTheme } from '../../../../_shared';
import { useResizeObserver } from '../../../../_shared/useResizeObserver';
import type { DonutProps } from '../../data';

echarts.use([TooltipComponent, PieChart, CanvasRenderer, SVGRenderer, LegendComponent, LegendPlainComponent]);

/**
 * Current implementation of Donut chart using Echarts - support only one layer
 */
const NivoDonut: React.FC<DonutProps> = ({ data, format }) => {
   const theme = useTheme();
   const { ref: divRef, width, height } = useResizeObserver<HTMLDivElement>();

   const currentData: PieDataItemOption[] = React.useMemo(() => {
      const colorObj = theme.isDark ? format.colorsDark || format.colors : format.colors;

      return format.layers.length > 0
         ? data.map((d) => ({
              itemStyle: {
                 color: colorObj ? colorObj[d[format.layers[0].sliceKey]] : undefined,
              },
              value: Number(d[format.layers[0].valueKey]),
              name:
                 format.labels && format.labels[d[format.layers[0].sliceKey]]
                    ? format.labels[d[format.layers[0].sliceKey]]
                    : String(d[format.layers[0].sliceKey]),
           }))
         : [];
   }, [data, format, theme.isDark]);

   const serieName = format.layers.length > 0 ? format.layers[0].layerName || '' : '';

   const chartOptions: EChartsOption = useMemo(
      () => ({
         backgroundColor: theme.base.background.color,
         tooltip: {
            trigger: 'item',
            formatter: serieName ? '{a} <br/><strong>{b}</strong>: {c} ({d}%)' : '<strong>{b}</strong>: {c} ({d}%)',
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
               fontFamily: theme.base.fontFamily,
            },
         },
         percentPrecision: 2,
         series: [
            {
               name: serieName,
               type: 'pie',
               radius: width > 0 && width < 480 ? ['33%', '50%'] : ['66%', '100%'],
               avoidLabelOverlap: true,
               label: {
                  show: true,
                  fontSize: 12,
                  fontWeight: 'normal',
                  fontFamily: theme.base.fontFamily,
                  formatter: '{b}: {d}%',
               },
               emphasis: {
                  label: {
                     show: true,
                     fontSize: 14,
                     fontWeight: 'bold',
                     fontFamily: theme.base.fontFamily,
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
      [currentData, serieName, width, theme],
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

   const chartOpts: Opts = useMemo(
      () => ({
         renderer: format.renderer || 'canvas',
      }),
      [format.renderer],
   );
   return (
      <div style={{ height: '100%', width: '100%' }} ref={divRef}>
         {width > 0 && height > 0 ? (
            <ReactEChartsCore
               style={{ height: '100%', width: '100%' }}
               echarts={echarts}
               option={chartOptions}
               notMerge={true}
               lazyUpdate={true}
               theme={theme.isDark ? 'dark' : undefined}
               onEvents={onEvents}
               opts={chartOpts}
            />
         ) : null}
      </div>
   );
};

export default NivoDonut;
