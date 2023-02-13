import { classNames } from 'shared/lib/classNames';
import ThemeDark from 'shared/img/theme-dark.svg';
import ThemeLight from 'shared/img/theme-light.svg';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { ThemeButton, UTButton } from 'shared/ui/UTButton/UTButton';
import cls from './ThemeSwitcher.module.sass';

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<UTButton
			onClick={toggleTheme}
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			theme={ThemeButton.CLEAR}
		>
			{theme === Theme.DARK ? <ThemeDark /> : <ThemeLight />}
		</UTButton>
	);
};
