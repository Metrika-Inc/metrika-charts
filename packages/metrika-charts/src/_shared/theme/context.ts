import React, { useContext } from 'react';
import { metrikaTheme } from './default';

export const ThemeContext = React.createContext(metrikaTheme);

export const ThemeProvider = ThemeContext.Provider;

export function useTheme() {
   return useContext(ThemeContext);
}
