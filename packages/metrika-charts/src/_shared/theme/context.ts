import React, { useContext } from 'react';
import { metrikaTheme, Theme } from './default';

export const ThemeContext = React.createContext<Theme>(metrikaTheme);

export const ThemeProvider = ThemeContext.Provider;

export function useTheme() {
   return useContext(ThemeContext);
}
