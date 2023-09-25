import { classNames } from 'shared/lib/classNames/classNames';
import cls from './UTText.module.scss';

export enum TextTheme {
	ERROR = 'error',
}

interface UTTextProps {
	className?: string;
	title?: string;
	text?: string;
	theme?: TextTheme;
}
export const UTText = ({ className, title, text, theme }: UTTextProps) => {

	return (
		<div className={classNames(cls.LangSwitcher, {}, [className, cls[theme]])} >
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	);
};
