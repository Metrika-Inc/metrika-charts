import {
   Chart as MetrikaChart,
   YDomainRange,
   Axis,
   BarSeries,
   LineSeries,
   Position,
   ScaleType,
   Settings,
   TickFormatter,
   RecursivePartial,
   LineSeriesStyle,
   Datum,
} from '@metrika/elastic-charts';
import React from 'react';
import { useTheme } from '../../../../_shared';
import { useElasticSyncTooltips } from '../../../../_shared';
import { formattersForTypes } from '../../../../_shared/format/formatting';
import { LineBarProps } from '../../data';
import { formatForUnit, scaleTypeForUnit } from './format';
import { calcChartRotation, sameSide } from './rotation';
import { chartTheme, gridStyle } from './style';

const ElasticLineBar = ({ data, meta }: LineBarProps) => {
   const { ref, elasticXYEventsProps } = useElasticSyncTooltips({ enabled: true, visible: true });

   const ChartsPalette = useTheme().data.colors;

   if (meta === undefined) {
      return null;
   }

   const groups = new Set<string | undefined>();
   meta.seriesId.forEach((id) => {
      if (meta.seriesInfo) {
         if (meta.seriesInfo[id])
            //todo matt check if ok
            groups.add(meta.seriesInfo[id].groupName);
      }
   });

   const axisDomainGroups = groups;
   const axes = meta.axes?.map((axis, i) => {
      let tickFormat: TickFormatter<Datum> | undefined = undefined;
      let labelFormat: TickFormatter<Datum> | undefined = undefined;
      const domainSide = meta.domainSide || 'bottom';

      let domain: YDomainRange | undefined = undefined;

      // if this axis is on or opposite the base of the chart (bottom by default)
      if (sameSide(axis.position, domainSide)) {
         axisDomainGroups.delete(axis.groupName);

         tickFormat = formatForUnit(meta.domainUnit, data);
      } else {
         if (axis.domain) {
            domain = { fit: axis.domain.fit, min: axis.domain.min, max: axis.domain.max };

            // handle one value only
            const yMax = data.reduce((max, serie) => {
               const maxSere = serie.reduce((ms, v) => (ms > v[1] ? ms : v[1]), -Infinity);
               return maxSere > max ? maxSere : max;
            }, -Infinity);
            const yMin = data.reduce((max, serie) => {
               const maxSere = serie.reduce((ms, v) => (ms < v[1] ? ms : v[1]), +Infinity);
               return maxSere < max ? maxSere : max;
            }, +Infinity);

            if (yMin === yMax) {
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
            groupId={axis.groupName}
            gridLine={axis.gridLines ? gridStyle : undefined}
         />
      );
   });

   // this is pretty klugey, but if there is a group id that does not have an axis
   // to define how to format its domain (x axis generally), then the tooltip will show an unformatted x axis
   // so we keep track of which groups get axes that define their domain formatting,
   // and then we create hidden axis for the rest
   axisDomainGroups.forEach((groupId, i) => {
      const domainSide = meta.domainSide || 'bottom';
      const tickFormat = formatForUnit(meta.domainUnit, data);

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

   const chartHasData = data.reduce((hasData, serie) => hasData && serie.length > 0, true);

   return (
      <MetrikaChart ref={ref}>
         <Settings
            showLegend
            theme={chartTheme}
            legendPosition={Position.Top}
            rotation={calcChartRotation(meta.domainSide)}
            {...elasticXYEventsProps}
         />
         {chartHasData && axes}
         {data.map((series, i) => {
            const seriesId = meta.seriesId[i];
            const seriesInfo = meta.seriesInfo ? meta.seriesInfo[seriesId] : null;

            const accessors = {
               xAccessor: 0,
               yAccessors: [1],
            };

            const seriesProps = {
               key: i,
               id: seriesInfo ? seriesInfo.name : i + '',
               // todo fix it!!
               color: ChartsPalette[i] || seriesInfo?.color,
               xScaleType: scaleTypeForUnit(meta.domainUnit),
               // tickFormat: tickFormat,
               yScaleType: ScaleType.Linear,
               ...accessors,
               yNice: true,
               data: series,
               groupId: seriesInfo?.groupName,
            };
            if (seriesInfo && seriesInfo.type === 'bar') {
               return (
                  <BarSeries
                     {...seriesProps}
                     stackAccessors={seriesInfo.subType === 'grouped' ? undefined : [0]}
                     displayValueSettings={{ showValueLabel: seriesInfo.showLabels, isValueContainedInElement: true }}
                  />
               );
            }

            const lineStyles: RecursivePartial<LineSeriesStyle> = {
               point: { visible: false },
               line: { strokeWidth: 2 },
            };

            return <LineSeries {...seriesProps} lineSeriesStyle={lineStyles} />;
         })}
      </MetrikaChart>
   );
};

export default ElasticLineBar;
