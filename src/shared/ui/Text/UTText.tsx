import { classNames } from 'shared/lib';
import cls from './UTText.module.scss';
import { memo } from 'react';
import { Mods } from 'shared/lib/classNames/classNames';

export enum TextTheme {
	ERROR = 'error',
	PRIMARY = 'primary'
}

export enum TextAlign {
	RIGHT = 'right',
	LEFT = 'left',
	CENTER = 'center',
}

export enum TextSize {
	M = 'size_m',
	L = 'size_l',
}

interface UTTextProps {
	className?: string;
	title?: string;
	text?: string;
	theme?: TextTheme;
	align?: TextAlign;
	size?: TextSize;
}
export const UTText = memo((props: UTTextProps) => {
  const { 
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true,
  };
	
  return (
    <div className={classNames(cls.UTText, mods, [className])} >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
