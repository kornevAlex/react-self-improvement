import { classNames } from 'shared/lib';
import cls from './UTLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC, memo } from 'react';

export enum UTLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface UTLinkProps extends LinkProps{
    className?: string;
    theme?: UTLinkTheme;
}

export const UTLink = memo((props: UTLinkProps) => {
	const {
		to,
		children,
		className,
		theme = UTLinkTheme.PRIMARY,
		...otherCategory
	} = props;
	return (
		<Link
			{...otherCategory}
			to={to}
			className={classNames(cls.UTLink, {}, [className, cls[theme]])}
		>
			{children}
		</Link>
	);
});
