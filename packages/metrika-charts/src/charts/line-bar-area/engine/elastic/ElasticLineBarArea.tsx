import {
   Chart as MetrikaChart,
   YDomainRange,
   Axis,
   BarSeries,
   LineSeries,
   AreaSeries,
   Position,
   ScaleType,
   Settings,
   TickFormatter,
   Datum,
} from '@metrika/elastic-charts';
import React from 'react';
import { useTheme } from '../../../../_shared';
import { useElasticSyncTooltips } from '../../../../_shared';
import { formattersForTypes } from '../../../../_shared/format/formatting';
import { LineBarAreaProps } from '../../data';
import { formatForUnit, scaleTypeForUnit } from './format';
import { calcChartRotation, sameSide } from './rotation';
import { chartTheme, gridStyle, lineStyles } from './style';

const ElasticLineBarArea = ({ data, format, className, syncTooltipEnabled, syncTooltipVisible }: LineBarAreaProps) => {
   const { ref, elasticXYEventsProps } = useElasticSyncTooltips({
      enabled: syncTooltipEnabled,
      visible: syncTooltipVisible,
   });

   const ChartsPalette = useTheme().data.colors;

   if (format === undefined) {
      return null;
   }

   const groups = new Set<string | undefined>();
   format.seriesId.forEach((id) => {
      if (format.seriesInfo) {
         if (format.seriesInfo[id])
            //todo matt check if ok
            groups.add(format.seriesInfo[id]?.axisName);
      }
   });

   const axisDomainGroups = groups;
   const axes = format.axes?.map((axis, i) => {
      let tickFormat: TickFormatter<Datum> | undefined = undefined;
      let labelFormat: TickFormatter<Datum> | undefined = undefined;
      const domainSide = format.domainSide || 'bottom';

      let domain: YDomainRange | undefined = undefined;

      // if this axis is on or opposite the base of the chart (bottom by default)
      if (sameSide(axis.position, domainSide)) {
         axisDomainGroups.delete(axis.axisName);

         tickFormat = formatForUnit(format.domainUnit, data);
      } else {
         if (axis.domain) {
            domain = { fit: axis.domain.fit, min: axis.domain.min, max: axis.domain.max };

            // handle one value only
            const yMax = data.reduce((max, serie) => {
               const maxSere = serie.reduce(
                  (ms, v) => (typeof v[1] !== 'number' ? ms : ms > v[1] ? ms : v[1]),
                  -Infinity,
               );
               return maxSere > max ? maxSere : max;
            }, -Infinity);
            const yMin = data.reduce((max, serie) => {
               const maxSere = serie.reduce(
                  (ms, v) => (typeof v[1] !== 'number' ? ms : ms < v[1] ? ms : v[1]),
                  +Infinity,
               );
               return maxSere < max ? maxSere : max;
            }, +Infinity);

            if (yMax - yMin < 0.001) {
               let min = yMin < +Infinity ? yMin - (axis.domain.padPercent || 1 / 10) * yMin : undefined;
               if (axis.displayUnit === 'percent' && min && min < 0) min = 0;
               let max = yMax > -Infinity ? yMax + (axis.domain.padPercent || 1 / 10) * yMax : undefined;
               if (axis.displayUnit === 'percent' && max && max > 1) max = 1;
               domain = { fit: axis.domain.fit, min: axis.domain.min || min, max: axis.domain.max || max };
            }
         }
         const formatters = formattersForTypes[axis.displayUnit ?? ''];
         if (formatters) {
            tickFormat = formatters[0];
            labelFormat = formatters[1];
         }
      }

      return (
         <Axis
            key={'axis_' + i}
            id={i + ''}
            position={axis.position}
            title={axis.title}
            tickFormat={tickFormat}
            labelFormat={labelFormat}
            showOverlappingTicks
            domain={domain}
            groupId={axis.axisName}
            gridLine={axis.gridLines ? gridStyle : undefined}
         />
      );
   });

   // this is pretty klugey, but if there is a group id that does not have an axis
   // to define how to format its domain (x axis generally), then the tooltip will show an unformatted x axis
   // so we keep track of which groups get axes that define their domain formatting,
   // and then we create hidden axis for the rest
   axisDomainGroups.forEach((groupId, i) => {
      const domainSide = format.domainSide || 'bottom';
      const tickFormat = formatForUnit(format.domainUnit, data);

      axes?.push(
         <Axis
            id={'groupfiller_' + i}
            key={'groupfiller_' + i}
            position={domainSide}
            hide={true}
            groupId={groupId}
            tickFormat={tickFormat}
         />,
      );
   });

   const chartHasData = data.some((serie) => serie.length > 0);

   return (
      <MetrikaChart ref={ref} className={className}>
         <Settings
            showLegend
            theme={chartTheme}
            legendPosition={Position.Top}
            rotation={calcChartRotation(format.domainSide)}
            {...elasticXYEventsProps}
         />
         {chartHasData && axes}
         {data.map((series, i) => {
            const seriesId = format.seriesId[i];
            const seriesInfo = format.seriesInfo[seriesId];

            const seriesProps = {
               key: i,
               id: seriesId,
               name: seriesInfo?.name || seriesId, //todo introduce formatter for lenged name textUiUppercase
               color: seriesInfo?.color || ChartsPalette[i],
               xScaleType: scaleTypeForUnit(format.domainUnit),
               yScaleType: ScaleType.Linear,
               xAccessor: 0,
               yAccessors: [1],
               yNice: true,
               data: series,
               groupId: seriesInfo?.axisName,
            };
            if (seriesInfo?.type === 'bar') {
               return (
                  <BarSeries
                     {...seriesProps}
                     stackAccessors={seriesInfo.subType === 'grouped' ? undefined : [0]}
                     displayValueSettings={{ showValueLabel: seriesInfo.showLabels, isValueContainedInElement: true }}
                  />
               );
            }

            if (seriesInfo?.type === 'area') {
               return (
                  <AreaSeries
                     {...seriesProps}
                     stackAccessors={seriesInfo.subType === 'stacked' ? [0] : undefined}
                     stackMode={seriesInfo.stackMode}
                     areaSeriesStyle={lineStyles}
                  />
               );
            }

            return <LineSeries {...seriesProps} lineSeriesStyle={lineStyles} />;
         })}
      </MetrikaChart>
   );
};

export default ElasticLineBarArea;
