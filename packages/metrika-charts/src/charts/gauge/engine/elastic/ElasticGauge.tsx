import { Chart, Goal } from '@metrika/elastic-charts';
import React, { useCallback, useMemo } from 'react';
import { useTheme, useUniqueId } from '../../../../_shared';
import { GaugeProps } from '../../data';
import { gaugeFormat } from '../../format';

const ElasticGauge: React.FC<GaugeProps> = ({ className, id, data, format }) => {
   const { actual } = data;
   const { bands, base, ticks, fontFamily, target, targetFillColor, actualFillColor, type } = format;

   const theme = useTheme().chart.gauge;
   const uId = useUniqueId();
   const bandsData = useMemo(() => bands.map(({ value }) => value), [bands]);
   const bandFillColor = useCallback(
      ({ value }) => {
         const band = bands.find(({ value: bandValue }) => bandValue === value);
         if (!band) return 'transparent';
         return band?.color || theme.types[type].bandsColor[bands.indexOf(band) % theme.types[type].bandsColor.length];
      },
      [bands, theme, type],
   );
   const config = useMemo(
      () => ({
         angleStart: Math.PI,
         angleEnd: 0,
         fontFamily: fontFamily || theme.fontFamily,
         actualFillColor: actualFillColor || theme.types[type].actualFillColor,
         targetFillColor: target ? targetFillColor : 'transparent',
      }),
      [fontFamily, target, actualFillColor, targetFillColor, type, theme],
   );

   const tickValueFormatter = useCallback(
      ({ value }: { value: number }) => gaugeFormat(value, format.valueUnit),
      [format.valueUnit],
   );

   return (
      /* Fix elastic charts aplha full canvas even if 180° goal chart */
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
         <div style={{ width: '100%', height: '180%' }}>
            <Chart className={className}>
               <Goal
                  id={id || uId}
                  subtype={'goal'}
                  base={base}
                  actual={actual}
                  bands={bandsData}
                  ticks={ticks}
                  target={target}
                  tickValueFormatter={tickValueFormatter}
                  bandFillColor={bandFillColor}
                  labelMajor=""
                  labelMinor=""
                  centralMajor={tickValueFormatter({ value: actual })}
                  centralMinor={``}
                  config={config}
               />
            </Chart>
         </div>
      </div>
   );
};

export default ElasticGauge;
