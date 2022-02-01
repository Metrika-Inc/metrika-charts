import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { ElasticDonut } from './engine/elastic';
const engines = {
    //  nivo: NivoLineChart,
    elastic: ElasticDonut,
};
export const MetrikaDonut = ({ fallback, engine, data, meta, }) => {
    const Engine = engines[engine];
    return (_jsx(Suspense, { fallback: fallback || null, children: _jsx(Engine, { data: data, meta: meta }, void 0) }, void 0));
};
MetrikaDonut.defaultProps = {
    engine: 'elastic',
};
MetrikaDonut.engines = Object.keys(engines);
//# sourceMappingURL=Donut.js.map