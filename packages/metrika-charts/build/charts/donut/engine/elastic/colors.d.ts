declare type ColorMaker = (x: number) => string;
export declare const indexInterpolatedFillColor: (colorMaker: ColorMaker) => (d: any, i: number, a: any[]) => string;
export declare function hueInterpolator(colors: any[]): (d: number) => string;
export declare const interpolatorCET2s: (d: number) => string;
export {};
