import { ResponsivePie, ResponsivePieCanvas } from '@nivo/pie';
import React, { useMemo } from 'react';
import { useTheme } from '../../../../_shared';
import { formatPercent } from '../../../../_shared/format/formatting';
import { useResizeObserver } from '../../../../_shared/useResizeObserver';
import type { DonutProps } from '../../data';
import { getNivoTheme } from './nivoTheme';

/**
 * Current implementation of Donut chart using Echarts - support only one layer
 */
const NivoDonut: React.FC<DonutProps> = ({ data, format }) => {
   const theme = useTheme();
   const { ref: divRef, width, height } = useResizeObserver<HTMLDivElement>();

   const currentData = useMemo(() => {
      const colorObj = theme.isDark ? format.colorsDark || format.colors : format.colors;

      return format.layers.length > 0
         ? data.map((d) => ({
              color: colorObj ? colorObj[d[format.layers[0].sliceKey]] : undefined,
              value: Number(d[format.layers[0].valueKey]),
              id: String(d[format.layers[0].sliceKey]),
              label:
                 format.labels && format.labels[d[format.layers[0].sliceKey]]
                    ? format.labels[d[format.layers[0].sliceKey]]
                    : String(d[format.layers[0].sliceKey]),
           }))
         : [];
   }, [data, format, theme.isDark]);

   const PieElement = format.renderer === 'svg' ? ResponsivePie : ResponsivePieCanvas;

   const currentTheme = useMemo(() => {
      return getNivoTheme(theme, format);
   }, [theme, format]);

   return (
      <div style={{ height: '100%', width: '100%' }} ref={divRef}>
         {width > 0 && height > 0 ? (
            <PieElement
               theme={currentTheme}
               valueFormat={(d) => formatPercent(Number(d))}
               colors={{ datum: 'data.color' }}
               data={currentData}
               margin={{ top: 64, right: 64, bottom: 64, left: 64 }}
               innerRadius={0.66}
               padAngle={0.7}
               cornerRadius={3}
               activeOuterRadiusOffset={8}
               borderWidth={1}
               borderColor={{
                  from: 'color',
                  modifiers: [['darker', 0.2]],
               }}
               arcLinkLabelsSkipAngle={10}
               arcLinkLabelsTextColor="#333333"
               arcLinkLabelsThickness={2}
               arcLinkLabelsColor={{ from: 'color' }}
               arcLinkLabel={(d) => `${d.label}: ${d.formattedValue}`}
               enableArcLabels={false}
               arcLabelsSkipAngle={10}
               arcLabelsTextColor={{
                  from: 'color',
                  modifiers: [['darker', 2]],
               }}
               defs={[
                  {
                     id: 'dots',
                     type: 'patternDots',
                     background: 'inherit',
                     color: 'rgba(255, 255, 255, 0.3)',
                     size: 4,
                     padding: 1,
                     stagger: true,
                  },
                  {
                     id: 'lines',
                     type: 'patternLines',
                     background: 'inherit',
                     color: 'rgba(255, 255, 255, 0.3)',
                     rotation: -45,
                     lineWidth: 6,
                     spacing: 10,
                  },
               ]}
               fill={
                  [
                     /*   {
                     match: {
                        id: 'early_contributors',
                     },
                     id: 'lines',
                  },
                  {
                     match: {
                        id: 'ethereum_foundation',
                     },
                     id: 'dots',
                  },
                  {
                     match: {
                        id: 'initial_coin_offering',
                     },
                     id: 'lines',
                  },*/
                  ]
               }
               legends={[
                  {
                     anchor: 'top',
                     direction: 'row',
                     justify: false,
                     translateX: 0,
                     translateY: -48,
                     itemsSpacing: 16,
                     itemWidth: 120,
                     itemHeight: 18,
                     itemTextColor: '#333333',
                     itemDirection: 'left-to-right',
                     itemOpacity: 1,
                     symbolSize: 18,
                     symbolShape: 'square',
                     effects: [
                        {
                           on: 'hover',
                           style: {
                              itemTextColor: '#666666',
                           },
                        },
                     ],
                  },
               ]}
            />
         ) : null}
      </div>
   );
};

export default NivoDonut;
