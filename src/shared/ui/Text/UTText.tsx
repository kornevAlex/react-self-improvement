import { classNames } from 'shared/lib';
import cls from './UTText.module.scss';
import { memo } from 'react';

export enum TextTheme {
	ERROR = 'error',
	PRIMARY = 'primary'
}

interface UTTextProps {
	className?: string;
	title?: string | null;
	text?: string | null;
	theme?: TextTheme;
}
export const UTText = memo(({ className, title, text, theme = TextTheme.PRIMARY }: UTTextProps) => {

	return (
		<div className={classNames(cls.LangSwitcher, {}, [className, cls[theme]])} >
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	);
});
