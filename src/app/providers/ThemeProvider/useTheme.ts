import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps } from './ThemeContext';

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): useThemeResult => {
  const { theme, setTheme }: ThemeContextProps = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch(theme){
    case Theme.LIGHT:
      newTheme = Theme.DARK;
      break;
    case Theme.DARK:
      newTheme = Theme.YELLOW;
      break;
    case Theme.YELLOW:
      newTheme = Theme.LIGHT;
      break;
    default: 
      newTheme = Theme.LIGHT;
    }
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };
  return { theme, toggleTheme };
};
