import React, { useEffect, useMemo } from 'react';
import { useEventsBus } from './context';
export function useElasticSyncTooltips({ enabled, visible }) {
    const eventsBus = useEventsBus();
    const ref = React.useRef(null);
    useEffect(() => {
        return eventsBus === null || eventsBus === void 0 ? void 0 : eventsBus.subscribe(ref);
    }, [eventsBus]);
    const elasticXYEventsProps = useMemo(() => {
        if (!enabled)
            return undefined;
        return {
            onPointerUpdate: eventsBus === null || eventsBus === void 0 ? void 0 : eventsBus.elastic_onPointerUpdate,
            pointerUpdateDebounce: 0,
            pointerUpdateTrigger: 'x',
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
//# sourceMappingURL=useElasticSyncTooltips.js.map