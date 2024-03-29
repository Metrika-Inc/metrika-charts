import { Chart, Goal, RecursivePartial } from '@metrika/elastic-charts';
import { Config } from '@metrika/elastic-charts/dist/_es6/chart_types/goal_chart/layout/types/config_types';
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

function calculateTypeReverse(thresolds: number[], actual: number) {
   if (thresolds.length > 1 && actual < thresolds[1]) {
      return 'error';
   }
   if (thresolds.length > 2 && actual < thresolds[2]) {
      return 'warning';
   }
   return 'ok';
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
      tickColor,
      tickTextColor,
      labelsColor,
   } = format;

   const realTarget = useMemo(
      () => (valueUnit === 'percent' && target !== undefined ? target * 100 : target),
      [target, valueUnit],
   );

   const actual = useMemo(() => (valueUnit === 'percent' ? rawActual * 100 : rawActual), [rawActual, valueUnit]);
   const ticks = useMemo(() => {
      if (rawType === 'blue' && realTarget !== undefined && actual > realTarget) {
         //dynamic ticks
         return [0, actual / 4, actual / 2, (actual * 3) / 4, actual];
      } else {
         return valueUnit === 'percent' ? rawTicks.map((t) => t * 100) : rawTicks;
      }
   }, [rawTicks, valueUnit, rawType, realTarget, actual]);

   const type =
      rawType !== 'dynamic' && rawType !== 'dynamic-reverse'
         ? rawType
         : Array.isArray(typeThresholds)
         ? rawType === 'dynamic-reverse'
            ? calculateTypeReverse(typeThresholds, rawActual)
            : calculateType(typeThresholds, rawActual)
         : 'ok';

   const theme = useTheme().chart.gauge;
   const uId = useUniqueId();
   const bandsData = useMemo(() => {
      if (rawType === 'blue' && realTarget !== undefined && actual > realTarget) {
         return bands.map(({ value }) => actual);
      }
      return bands.map(({ value }) => (valueUnit === 'percent' ? value * 100 : value));
   }, [valueUnit, bands, rawType, realTarget, actual]);

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

   const config: RecursivePartial<Config> = useMemo(
      () => ({
         angleStart: Math.PI,
         angleEnd: 0,
         fontFamily: fontFamily || theme.fontFamily,
         actualFillColor: actualFillColor || theme.types[type].actualFillColor,
         targetFillColor: target ? targetFillColor : 'transparent',
         tickColor: tickColor,
         tickTextColor: tickTextColor,
         labelsColor: labelsColor,
      }),
      [fontFamily, target, actualFillColor, targetFillColor, type, theme, tickColor, tickTextColor, labelsColor],
   );

   const tickValueFormatter = useCallback(
      ({ value }: { value: number }) => gaugeFormat(value, format.valueUnit),
      [format.valueUnit],
   );

   return (
      /* Fix elastic charts aplha full canvas even if 180° goal chart */
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
         <div style={{ flex: 1, width: '100%', height: '100%', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '180%' }}>
               <Chart className={className}>
                  <Goal
                     id={id || uId}
                     subtype={'goal'}
                     base={base}
                     actual={actual}
                     bands={bandsData}
                     ticks={ticks}
                     target={realTarget}
                     tickValueFormatter={tickValueFormatter}
                     bandFillColor={bandFillColor}
                     centralMajor={tickValueFormatter({ value: actual })}
                     centralMinor={``}
                     config={config}
                  />
               </Chart>
            </div>
         </div>
         {data.bottomLabel && (
            <p
               style={{
                  textAlign: 'center',
                  marginBottom: '8px',
                  fontFamily: fontFamily || theme.fontFamily,
                  color: tickTextColor,
               }}
            >
               {data.bottomLabel}
            </p>
         )}
      </div>
   );
};

export default ElasticGauge;
