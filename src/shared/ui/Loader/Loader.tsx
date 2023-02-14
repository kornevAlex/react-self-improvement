import { classNames } from 'shared/lib';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}
export const Loader = ({ className }: LoaderProps) => {
	return (
		<div className={classNames(cls.spinner, {}, [className])}>
			<div><div></div></div>
			<div><div></div></div>
			<div><div></div></div>
			<div><div></div></div>
			<div><div></div></div>
			<div><div></div></div>
			<div><div></div></div>
			<div><div></div></div>
		</div>
	);
};
