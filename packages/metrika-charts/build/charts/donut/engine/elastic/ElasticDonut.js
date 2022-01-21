import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Chart, Position, Settings, Partition } from '@metrika/elastic-charts';
import { useMemo } from 'react';
import { useTheme } from '../../../../_shared';
import { indexInterpolatedFillColor, interpolatorCET2s } from './colors';
import { getElasticDonutConfig, getElasticDonutTheme } from './config';
const ElasticDonut = ({ data, meta }) => {
    const theme = useTheme();
    const config = useMemo(() => getElasticDonutConfig(theme, meta), [theme, meta]);
    const donutTheme = useMemo(() => getElasticDonutTheme(theme), [theme]);
    return (_jsxs(Chart, { children: [_jsx(Settings, { theme: donutTheme, showLegend: true, legendPosition: Position.Right, legendMaxDepth: 1 }, void 0), _jsx(Partition, { id: "id-1", data: data, valueAccessor: (d) => d[meta.valueKey], 
                //   valueFormatter=
                layers: meta.layers.map((l) => ({
                    groupByRollup: (d) => d[l.groupByKey],
                    nodeLabel: (d) => d,
                    fillLabel: { textInvertible: true },
                    shape: {
                        fillColor: (d) => 
                        // pick color from color palette based on mean angle - rather distinct colors in the inner ring
                        indexInterpolatedFillColor(interpolatorCET2s)(d, (d.x0 + d.x1) / 2 / (2 * Math.PI), []),
                    },
                })), config: config }, void 0)] }, void 0));
};
export default ElasticDonut;
//# sourceMappingURL=ElasticDonut.js.map