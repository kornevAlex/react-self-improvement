import { classNames } from 'shared/lib';
import cls from './PageLoader.module.scss';
import { Loader } from '../../shared/ui/Loader/Loader';

interface PageLoaderProps {
    className?: string;
}
export const PageLoader = ({ className }: PageLoaderProps) => {
	return (
		<div className={classNames(cls['loadingio-spinner-spin-h7mi0rpdvw'], {}, [className])}>
			<Loader />
		</div>
	);
};
