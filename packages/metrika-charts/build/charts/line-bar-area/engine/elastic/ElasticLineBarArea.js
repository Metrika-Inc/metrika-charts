import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Chart as MetrikaChart, Axis, BarSeries, LineSeries, AreaSeries, Position, ScaleType, Settings, } from '@metrika/elastic-charts';
import { useTheme } from '../../../../_shared';
import { useElasticSyncTooltips } from '../../../../_shared';
import { formattersForTypes } from '../../../../_shared/format/formatting';
import { formatForUnit, scaleTypeForUnit } from './format';
import { calcChartRotation, sameSide } from './rotation';
import { chartTheme, gridStyle } from './style';
const ElasticLineBarArea = ({ data, meta }) => {
    var _a;
    const { ref, elasticXYEventsProps } = useElasticSyncTooltips({ enabled: true, visible: true });
    const ChartsPalette = useTheme().data.colors;
    if (meta === undefined) {
        return null;
    }
    const groups = new Set();
    meta.seriesId.forEach((id) => {
        if (meta.seriesInfo) {
            if (meta.seriesInfo[id])
                //todo matt check if ok
                groups.add(meta.seriesInfo[id].axisName);
        }
    });
    const axisDomainGroups = groups;
    const axes = (_a = meta.axes) === null || _a === void 0 ? void 0 : _a.map((axis, i) => {
        var _a;
        let tickFormat = undefined;
        let labelFormat = undefined;
        const domainSide = meta.domainSide || 'bottom';
        let domain = undefined;
        // if this axis is on or opposite the base of the chart (bottom by default)
        if (sameSide(axis.position, domainSide)) {
            axisDomainGroups.delete(axis.axisName);
            tickFormat = formatForUnit(meta.domainUnit, data);
        }
        else {
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
                    if (axis.displayUnit === 'percent' && min && min < 0)
                        min = 0;
                    let max = yMax > -Infinity ? yMax + (axis.domain.padPercent || 1 / 10) * yMax : undefined;
                    if (axis.displayUnit === 'percent' && max && max > 1)
                        max = 1;
                    domain = { fit: axis.domain.fit, min: axis.domain.min || min, max: axis.domain.max || max };
                }
            }
            const formatters = formattersForTypes[(_a = axis.displayUnit) !== null && _a !== void 0 ? _a : ''];
            if (formatters) {
                tickFormat = formatters[0];
                labelFormat = formatters[1];
            }
        }
        return (_jsx(Axis, { id: i + '', position: axis.position, title: axis.title, tickFormat: tickFormat, labelFormat: labelFormat, showOverlappingTicks: true, domain: domain, groupId: axis.axisName, gridLine: axis.gridLines ? gridStyle : undefined }, 'axis_' + i));
    });
    // this is pretty klugey, but if there is a group id that does not have an axis
    // to define how to format its domain (x axis generally), then the tooltip will show an unformatted x axis
    // so we keep track of which groups get axes that define their domain formatting,
    // and then we create hidden axis for the rest
    axisDomainGroups.forEach((groupId, i) => {
        const domainSide = meta.domainSide || 'bottom';
        const tickFormat = formatForUnit(meta.domainUnit, data);
        axes === null || axes === void 0 ? void 0 : axes.push(_jsx(Axis, { id: 'groupfiller_' + i, position: domainSide, hide: true, groupId: groupId, tickFormat: tickFormat }, 'groupfiller_' + i));
    });
    const chartHasData = data.reduce((hasData, serie) => hasData && serie.length > 0, true);
    return (_jsxs(MetrikaChart, Object.assign({ ref: ref }, { children: [_jsx(Settings, Object.assign({ showLegend: true, theme: chartTheme, legendPosition: Position.Top, rotation: calcChartRotation(meta.domainSide) }, elasticXYEventsProps), void 0), chartHasData && axes, data.map((series, i) => {
                const seriesId = meta.seriesId[i];
                const seriesInfo = meta.seriesInfo ? meta.seriesInfo[seriesId] : null;
                const accessors = {
                    xAccessor: 0,
                    yAccessors: [1],
                };
                const seriesProps = Object.assign(Object.assign({ key: i, id: seriesInfo ? seriesInfo.name : i + '', 
                    // todo fix it!!
                    color: ChartsPalette[i] || (seriesInfo === null || seriesInfo === void 0 ? void 0 : seriesInfo.color), xScaleType: scaleTypeForUnit(meta.domainUnit), 
                    // tickFormat: tickFormat,
                    yScaleType: ScaleType.Linear }, accessors), { yNice: true, data: series, groupId: seriesInfo === null || seriesInfo === void 0 ? void 0 : seriesInfo.axisName });
                if (seriesInfo && seriesInfo.type === 'bar') {
                    return (_jsx(BarSeries, Object.assign({}, seriesProps, { stackAccessors: seriesInfo.subType === 'grouped' ? undefined : [0], displayValueSettings: { showValueLabel: seriesInfo.showLabels, isValueContainedInElement: true } }), void 0));
                }
                const lineStyles = {
                    point: { visible: false },
                    line: { strokeWidth: 2 },
                };
                if (seriesInfo && seriesInfo.type === 'area') {
                    return (_jsx(AreaSeries, Object.assign({}, seriesProps, { stackAccessors: seriesInfo.subType === 'stacked' ? [0] : undefined, stackMode: seriesInfo.stackMode, areaSeriesStyle: lineStyles }), void 0));
                }
                return _jsx(LineSeries, Object.assign({}, seriesProps, { lineSeriesStyle: lineStyles }), void 0);
            })] }), void 0));
};
export default ElasticLineBarArea;
//# sourceMappingURL=ElasticLineBarArea.js.map