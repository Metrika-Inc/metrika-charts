import { createContext, useContext } from 'react';
import { EventsBus } from './bus';
export const EventsContext = createContext({ eventsBus: new EventsBus() });
export const EventsProvider = EventsContext.Provider;
export function useEventsBus() {
    return useContext(EventsContext).eventsBus;
}
//# sourceMappingURL=context.js.map