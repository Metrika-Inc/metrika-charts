var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { ElasticLineBar } from './engine/elastic';
import { NivoLineChart } from './engine/nivo';
const engines = {
    nivo: NivoLineChart,
    elastic: ElasticLineBar,
};
export const MetrikaLineBarArea = (_a) => {
    var { fallback, engine = 'elastic' } = _a, rest = __rest(_a, ["fallback", "engine"]);
    const Engine = engines[engine];
    return (_jsx(Suspense, Object.assign({ fallback: fallback || null }, { children: _jsx(Engine, Object.assign({}, rest), void 0) }), void 0));
};
MetrikaLineBarArea.defaultProps = {
    engine: 'elastic',
};
MetrikaLineBarArea.engines = Object.keys(engines);
//# sourceMappingURL=LineBarArea.js.map