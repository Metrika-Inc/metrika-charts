import './ibm-mono.css';
import '@metrika/charts/dist/theme_light.css';
import { ThemeProvider, metrikaTheme, EventsBus, EventsProvider } from '@metrika/metrika-charts';

export const parameters = {
   actions: { argTypesRegex: '^on[A-Z].*' },
   controls: {
      matchers: {
         color: /(background|color)$/i,
         date: /Date$/,
      },
   },
};

const eventsBus = new EventsBus();

export const decorators = [
   (Story) => (
      <ThemeProvider value={metrikaTheme}>
         <EventsProvider value={{ eventsBus }}>
            <Story />
         </EventsProvider>
      </ThemeProvider>
   ),
];
