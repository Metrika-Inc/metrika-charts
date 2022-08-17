import { Chart, Goal } from '@metrika/elastic-charts';
import React, { useCallback, useMemo } from 'react';
import { useTheme, useUniqueId } from '../../../../_shared';
import { GaugeProps } from '../../data';
import { gaugeFormat } from '../../format';

//todo move to record
function calculateType(thresolds: number[], actual: number) {
   if (thresolds.length > 1 && actual < thresolds[1]) {
      return 'ok';
   }
   if (thresolds.length > 2 && actual < thresolds[2]) {
      return 'warning';
   }
   return 'error';
}

const ElasticGauge: React.FC<GaugeProps> = ({ className, id, data, format }) => {
   const { actual: rawActual } = data;
   const {
      bands,
      base,
      ticks: rawTicks,
      fontFamily,
      target,
      targetFillColor,
      actualFillColor,
      type: rawType,
      typeThresholds,
      valueUnit,
   } = format;

   const actual = useMemo(() => (valueUnit === 'percent' ? rawActual * 100 : rawActual), [rawActual, valueUnit]);
   const ticks = useMemo(
      () => (valueUnit === 'percent' ? rawTicks.map((t) => t * 100) : rawTicks),
      [rawTicks, valueUnit],
   );

   const type =
      rawType !== 'dynamic' ? rawType : Array.isArray(typeThresholds) ? calculateType(typeThresholds, rawActual) : 'ok';

   const theme = useTheme().chart.gauge;
   const uId = useUniqueId();
   const bandsData = useMemo(
      () => bands.map(({ value }) => (valueUnit === 'percent' ? value * 100 : value)),
      [valueUnit, bands],
   );
   const bandFillColor = useCallback(
      ({ value }) => {
         const band = bandsData.find((bandValue) => bandValue === value);
         if (!band) return 'transparent';
         return (
            bands[bandsData.indexOf(band)]?.color ||
            theme.types[type].bandsColor[bandsData.indexOf(band) % theme.types[type].bandsColor.length]
         );
      },
      [bandsData, theme, type, bands],
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