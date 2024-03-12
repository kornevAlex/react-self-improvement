import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface IconProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}
export const Icon: FC<IconProps> = ({ className, Svg }) => {
	const { t, i18n } = useTranslation();

	return (
		<Svg className={classNames(cls.Icon, {}, [className])} />
	);
};
