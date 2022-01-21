import React, { SuspenseProps } from 'react';
import { LineBarAreaProps } from './data';
declare const engines: {
    readonly nivo: React.LazyExoticComponent<({ data }: LineBarAreaProps) => JSX.Element>;
    readonly elastic: React.LazyExoticComponent<({ data, meta }: LineBarAreaProps) => JSX.Element | null>;
};
export interface MetrikaLineBarAreaProps extends LineBarAreaProps {
    engine?: keyof typeof engines;
    fallback?: SuspenseProps['fallback'];
}
export declare const MetrikaLineBarArea: React.FC<MetrikaLineBarAreaProps> & {
    engines: Array<keyof typeof engines>;
};
export {};
