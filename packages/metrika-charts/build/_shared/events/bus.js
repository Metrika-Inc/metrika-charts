import { Chart } from '@metrika/elastic-charts';
export class EventsBus {
    registeredCharts = [];
    /* Subscribe to Event Bus */
    subscribe = (ref) => {
        this.registeredCharts.push(ref);
        return () => {
            this.registeredCharts = [...this.registeredCharts.filter((f) => f !== ref)];
        };
    };
    /* Elastic onPointerUpdate Event */
    elastic_onPointerUpdate = (event) => {
        this.registeredCharts.forEach((c) => {
            if (c.current instanceof Chart) {
                c.current.dispatchExternalPointerEvent(event);
            }
        });
    };
}
//# sourceMappingURL=bus.js.map