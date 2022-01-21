import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { ElasticLineBar } from './engine/elastic';
import { NivoLineChart } from './engine/nivo';
const engines = {
    nivo: NivoLineChart,
    elastic: ElasticLineBar,
};
export const MetrikaLineBarArea = ({ fallback, engine = 'elastic', data, meta, }) => {
    const Engine = engines[engine];
    return (_jsx(Suspense, Object.assign({ fallback: fallback || null }, { children: _jsx(Engine, { data: data, meta: meta }, void 0) }), void 0));
};
MetrikaLineBarArea.defaultProps = {
    engine: 'elastic',
};
MetrikaLineBarArea.engines = Object.keys(engines);
//# sourceMappingURL=LineBarArea.js.map