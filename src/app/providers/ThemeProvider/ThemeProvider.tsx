import { FC, ReactElement, useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
	children: ReactElement;
	initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps>= ({ children, initialTheme }) => {
	const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
	const defaultProps = useMemo(() => ({
		theme,
		setTheme,
	}), [theme]);
	console.log(theme);
	

	useEffect(() => {
		document.body.classList.add(theme);

		return () => {
			document.body.classList.remove(theme);
		};
	}, [theme]);
	
	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};
