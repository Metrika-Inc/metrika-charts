import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { ElasticHeatmap } from './engine/elastic';
const engines = {
    elastic: ElasticHeatmap,
};
export const MetrikaHeatmap = ({ fallback, engine, data, meta, }) => {
    const Engine = engines[engine];
    return (_jsx(Suspense, Object.assign({ fallback: fallback || null }, { children: _jsx(Engine, { data: data, meta: meta }, void 0) }), void 0));
};
MetrikaHeatmap.defaultProps = {
    engine: 'elastic',
};
MetrikaHeatmap.engines = Object.keys(engines);
//# sourceMappingURL=Heatmap.js.map