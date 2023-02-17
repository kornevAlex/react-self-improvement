import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface ThemeContextProps{
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setTheme: () => {},
	theme: Theme.DARK
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
