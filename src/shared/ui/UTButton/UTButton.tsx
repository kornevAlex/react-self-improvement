import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib';
import cls from './UTButton.module.scss';
import { Mods } from 'shared/lib/classNames/classNames';

export enum ButtonTheme {
		CLEAR = 'clear',
		OUTLINE = 'outline',
		BACKGROUND = 'background',
		BACKGROUND_INVERTED = 'backgroundInverted',

}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface UTButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
		square?: boolean;
		size?: ButtonSize
}
export const UTButton = memo((props: UTButtonProps) => {
	const {
		children,
		className,
		theme = ButtonTheme.OUTLINE,
		square,
		disabled,
		size = ButtonSize.M,
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.square]: square,
		[cls.disabled]: disabled,
	};

	return (
		<button
			className={classNames(cls.UTButton, mods, [className, cls[theme], cls[size]])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});
