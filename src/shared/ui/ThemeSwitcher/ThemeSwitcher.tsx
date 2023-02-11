import { classNames } from 'shared/lib/classNames';
import { ThemeButton, UTButton } from '../UTButton/UTButton';
import cls from './ThemeSwitcher.module.sass';
import ThemeDark from "../../img/theme-dark.svg";
import ThemeLight from "../../img/theme-light.svg";
import { Theme, useTheme } from 'app/providers/ThemeProvider';

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

   return (
       <UTButton
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight />}
       </UTButton>
   )
}