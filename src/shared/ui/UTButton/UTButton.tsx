import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './UTButton.module.sass';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface UTButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}
export const UTButton: FC<UTButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        ...otherProps
     } = props
   return (
       <button
        className={classNames(cls.UTButton, {}, [className, cls[theme]])}
        {...otherProps}
       >
        {children}
       </button>
   )
}