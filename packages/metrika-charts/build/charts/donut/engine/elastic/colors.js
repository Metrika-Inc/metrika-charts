import { palettes } from './palette';
export const indexInterpolatedFillColor = (colorMaker) => (d, i, a) => colorMaker(i / (a.length + 1));
export function hueInterpolator(colors) {
    return (d) => {
        const index = Math.round(d * 255);
        const [r, g, b, a] = colors[index];
        return colors[index].length === 3 ? `rgb(${r},${g},${b})` : `rgba(${r},${g},${b},${a !== null && a !== void 0 ? a : 1})`;
    };
}
export const interpolatorCET2s = hueInterpolator(palettes.CET2s.map(([r, g, b]) => [r, g, b, 0.8]));
//# sourceMappingURL=colors.js.map