import React, { SuspenseProps } from 'react';
import { DonutProps } from './data';
declare const engines: {
    readonly elastic: React.LazyExoticComponent<React.FC<DonutProps>>;
};
export interface MetrikaDonutProps extends DonutProps {
    engine: keyof typeof engines;
    fallback?: SuspenseProps['fallback'];
}
export declare const MetrikaDonut: React.FC<MetrikaDonutProps> & {
    engines: Array<keyof typeof engines>;
};
export {};
