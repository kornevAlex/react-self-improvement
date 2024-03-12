import { CSSProperties, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Image.module.scss';
import parentCls from '../Skeleton.module.scss';
import ImageIcon from './image.svg';
import { SkeletonProps } from '../Skeleton';

export const Image: FC<SkeletonProps> = ({ borderRadius, height, width, className }) => {

	const styles: CSSProperties = {
		height,
		borderRadius,
		width
	};
  
	return (
		<div style={styles} className={classNames(cls.Image, {}, [parentCls.Skeleton, className])}>
			<ImageIcon />
		</div>
	);
};
