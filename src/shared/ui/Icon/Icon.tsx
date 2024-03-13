import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { FC } from 'react';

interface IconProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}
export const Icon: FC<IconProps> = ({ className, Svg }) => {

	return (
		<Svg className={classNames(cls.Icon, {}, [className])} />
	);
};
