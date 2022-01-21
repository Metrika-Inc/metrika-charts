import { Chart, PointerEvent } from '@metrika/elastic-charts';
import { RefObject } from 'react';
export declare class EventsBus {
    private registeredCharts;
    subscribe: (ref: RefObject<Chart>) => () => void;
    elastic_onPointerUpdate: (event: PointerEvent) => void;
}
