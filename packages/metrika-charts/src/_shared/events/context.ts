import { createContext, useContext } from 'react';
import { EventsBus } from './bus';

export const EventsContext = createContext<{ eventsBus: EventsBus }>({ eventsBus: new EventsBus() });

export const EventsProvider = EventsContext.Provider;

export function useEventsBus() {
   return useContext(EventsContext).eventsBus;
}
