import { Chart, PointerUpdateTrigger } from '@metrika/elastic-charts';
import React from 'react';
export declare function useElasticSyncTooltips({ enabled, visible }: {
    enabled?: boolean;
    visible?: boolean;
}): {
    ref: React.RefObject<Chart>;
    elasticXYEventsProps: {
        onPointerUpdate: (event: import("@metrika/elastic-charts").PointerEvent) => void;
        pointerUpdateDebounce: number;
        pointerUpdateTrigger: PointerUpdateTrigger;
        externalPointerEvents: {
            tooltip: {
                visible: boolean | undefined;
            };
        };
    } | undefined;
};
