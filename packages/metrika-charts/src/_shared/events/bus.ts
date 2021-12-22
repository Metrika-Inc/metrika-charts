import { Chart, PointerEvent } from '@metrika/elastic-charts';
import { RefObject } from 'react';

export class EventsBus {
   private registeredCharts: Array<RefObject<Chart>> = [];

   /* Subscribe to Event Bus */
   subscribe = (ref: RefObject<Chart>) => {
      this.registeredCharts.push(ref);
      return () => {
         this.registeredCharts = [...this.registeredCharts.filter((f) => f !== ref)];
      };
   };

   /* Elastic onPointerUpdate Event */
   elastic_onPointerUpdate = (event: PointerEvent) => {
      this.registeredCharts.forEach((c) => {
         if (c.current instanceof Chart) {
            c.current.dispatchExternalPointerEvent(event);
         }
      });
   };
}
