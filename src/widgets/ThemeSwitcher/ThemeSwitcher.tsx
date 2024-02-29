import { classNames } from 'shared/lib';
import ThemeDark from 'shared/img/theme-dark.svg';
import ThemeLight from 'shared/img/theme-light.svg';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { ButtonTheme, UTButton } from 'shared/ui/UTButton/UTButton';
import cls from './ThemeSwitcher.module.scss';
import { memo } from 'react';

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	
	return (
		<UTButton
			onClick={toggleTheme}
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			theme={ButtonTheme.CLEAR}
		>
			{theme === Theme.DARK && <ThemeDark />}
			{theme === Theme.LIGHT && <ThemeLight />}
			{theme === Theme.GREEN && <ThemeLight />}
		</UTButton>
	);
});
