import { Chart, PointerUpdateTrigger } from '@metrika/charts';
import React, { useEffect, useMemo } from 'react';
import { useEventsBus } from './context';

export function useElasticSyncTooltips({ enabled, visible }: { enabled; visible: boolean }) {
   const eventsBus = useEventsBus();

   const ref = React.useRef<Chart>(null);

   useEffect(() => {
      return eventsBus?.subscribe(ref);
   }, [eventsBus]);

   const elasticXYEventsProps = useMemo(() => {
      if (!enabled) return undefined;
      return {
         onPointerUpdate: eventsBus?.elastic_onPointerUpdate,
         pointerUpdateDebounce: 0,
         pointerUpdateTrigger: 'x' as PointerUpdateTrigger,
         externalPointerEvents: {
            tooltip: { visible },
         },
      };
   }, [eventsBus, enabled, visible]);

   return {
      ref,
      elasticXYEventsProps,
   };
}
