/// <reference types="react" />
import { EventsBus } from './bus';
export declare const EventsContext: import("react").Context<{
    eventsBus: EventsBus;
}>;
export declare const EventsProvider: import("react").Provider<{
    eventsBus: EventsBus;
}>;
export declare function useEventsBus(): EventsBus;
