import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps } from './ThemeContext';

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): useThemeResult => {
	const { theme, setTheme }: ThemeContextProps = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
		setTheme(newTheme);
	};
	return { theme, toggleTheme };
};