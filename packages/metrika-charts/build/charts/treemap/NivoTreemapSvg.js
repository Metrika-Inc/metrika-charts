import { jsx as _jsx } from "react/jsx-runtime";
import { ResponsiveTreeMap } from '@nivo/treemap';
import datasvg from './treesvg.json';
export const NivoTreeMapSvg = () => (_jsx(ResponsiveTreeMap, { data: datasvg, colors: ['#3A87BF', '#002845', '#60A4D0', '#01487B', '#94C3DD', '#146BAB'], identity: "name", value: "loc", valueFormat: ".02s", margin: { top: 10, right: 10, bottom: 10, left: 10 }, labelSkipSize: 12, labelTextColor: { from: 'color', modifiers: [['darker', 1.2]] }, parentLabelTextColor: { from: 'color', modifiers: [['darker', 2]] }, borderColor: { from: 'color', modifiers: [['darker', 0.1]] } }, void 0));
//# sourceMappingURL=NivoTreemapSvg.js.map