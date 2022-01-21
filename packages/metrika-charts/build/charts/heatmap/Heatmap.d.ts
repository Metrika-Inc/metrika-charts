import React, { SuspenseProps } from 'react';
import { HeatmapProps } from './data';
declare const engines: {
    readonly elastic: React.LazyExoticComponent<(props: {
        data: import("./data").HeatmapData;
        meta: import("./data").HeatmapMeta;
        className?: string | undefined;
    }) => JSX.Element | null>;
};
export interface MetrikaHeatmapProps extends HeatmapProps {
    engine: keyof typeof engines;
    fallback?: SuspenseProps['fallback'];
}
export declare const MetrikaHeatmap: React.FC<MetrikaHeatmapProps> & {
    engines: Array<keyof typeof engines>;
};
export {};
