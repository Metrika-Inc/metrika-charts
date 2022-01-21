import { Chart } from '@metrika/elastic-charts';
export class EventsBus {
    constructor() {
        this.registeredCharts = [];
        /* Subscribe to Event Bus */
        this.subscribe = (ref) => {
            this.registeredCharts.push(ref);
            return () => {
                this.registeredCharts = [...this.registeredCharts.filter((f) => f !== ref)];
            };
        };
        /* Elastic onPointerUpdate Event */
        this.elastic_onPointerUpdate = (event) => {
            this.registeredCharts.forEach((c) => {
                if (c.current instanceof Chart) {
                    c.current.dispatchExternalPointerEvent(event);
                }
            });
        };
    }
}
//# sourceMappingURL=bus.js.map