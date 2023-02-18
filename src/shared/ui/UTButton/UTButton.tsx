import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './UTButton.module.scss';

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
export const UTButton: FC<UTButtonProps> = (props) => {
	const {
		children,
		className,
		theme,
		square,
		size = ButtonSize.M,
		...otherProps
	} = props;

	const mods: Record<string, boolean> = {
		[cls.square]: square,
	};
	console.log(mods);

	return (
		<button
			className={classNames(cls.UTButton, mods, [className, cls[theme], cls[size]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
