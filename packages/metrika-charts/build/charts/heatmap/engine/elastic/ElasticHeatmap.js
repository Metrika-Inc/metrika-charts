import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Chart as MetrikaChart, Heatmap, ScaleType, Settings } from '@metrika/elastic-charts';
import * as merge from 'deepmerge';
import { useMemo } from 'react';
import { formatForRange, formattersForTypes } from '../../../../_shared/format/formatting';
import { HEATMAP_STYLE } from './style';
const ElasticHeatmap = (props) => {
    var _a, _b;
    const className = props.className;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const graphData = props.data;
    // const chart = props.chart;
    // finds the oldest time in the heatmap
    const emptyData = graphData.length === 0;
    const timeSet = new Set();
    graphData.forEach((datum) => timeSet.add(datum[1]));
    const timeArr = Array.from(timeSet).sort();
    const minTime = timeArr[0];
    const timeDiff = timeArr[1] - timeArr[0];
    // we add the time interval to the max time so that the last value in the chart gets its space
    const maxTime = timeDiff + timeArr.slice(-1)[0];
    const timeFormatter = formatForRange(maxTime - minTime);
    const yAxisUnit = (_b = (_a = props.meta) === null || _a === void 0 ? void 0 : _a.yAxisUnit) !== null && _b !== void 0 ? _b : '';
    const formats = formattersForTypes[yAxisUnit];
    const config = useMemo(
    // combine the static HEATMAP_STYLE with the dyanmic styling
    () => {
        var _a;
        return merge.all([
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
                    formatter: formats ? (_a = formats[1]) !== null && _a !== void 0 ? _a : formats[0] : undefined,
                },
                xAxisLabel: {
                    name: props.meta.xAxisName,
                    formatter: (value) => {
                        return timeFormatter(value);
                    },
                },
            },
        ]);
    }, [props.meta.showValueLabels, timeFormatter, formats, props.meta.yAxisName, props.meta.xAxisName]);
    if (emptyData) {
        return null;
    }
    return (_jsxs(MetrikaChart, Object.assign({ className: className }, { children: [_jsx(Settings
            // showLegend
            // legendPosition="top"
            // brushAxis="both"
            , { 
                // showLegend
                // legendPosition="top"
                // brushAxis="both"
                xDomain: { min: minTime, max: maxTime }, tooltip: { customStyle: { maxWidth: 'none' } } }, void 0), _jsx(Heatmap, { id: props.meta.valueId, colorScale: ScaleType.Linear, colors: ['#ffffff', '#3096D8'], data: graphData, xAccessor: 1, yAccessor: 0, valueAccessor: 2, valueFormatter: (d) => (d ? d.toFixed(2) : d), ySortPredicate: "numAsc", xScaleType: ScaleType.Time, config: config }, void 0)] }), void 0));
};
export default ElasticHeatmap;
//# sourceMappingURL=ElasticHeatmap.js.map