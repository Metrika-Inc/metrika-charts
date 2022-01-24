import React, { SuspenseProps } from 'react';
import { LineBarAreaProps } from './data';
declare const engines: {
    readonly nivo: React.LazyExoticComponent<({ data }: LineBarAreaProps & {
        className?: string | undefined;
    }) => JSX.Element>;
    readonly elastic: React.LazyExoticComponent<({ data, meta, className, syncTooltipEnabled, syncTooltipVisible, }: LineBarAreaProps & {
        className?: string | undefined;
        syncTooltipEnabled?: boolean | undefined;
        syncTooltipVisible?: boolean | undefined;
    }) => JSX.Element | null>;
};
export interface MetrikaLineBarAreaProps extends LineBarAreaProps {
    engine?: keyof typeof engines;
    className?: string;
    fallback?: SuspenseProps['fallback'];
    syncTooltipEnabled?: boolean;
    syncTooltipVisible?: boolean;
}
export declare const MetrikaLineBarArea: React.FC<MetrikaLineBarAreaProps> & {
    engines: Array<keyof typeof engines>;
};
export {};
