import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';
import { CSSProperties, FC } from 'react';
import { Image } from './Image/Image';
import { AvatarSkeleton as Avatar } from './AvatarSkeleton/AvatarSkeleton';

export interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  size?: string;
}

interface CompoundedComponent {
	Image: typeof Image
	Avatar: typeof Avatar
}

// eslint-disable-next-line react/prop-types
export const Skeleton: CompoundedComponent & FC<SkeletonProps> = ({ className, height, borderRadius, width, size }) => {
	const styles: CSSProperties = {
		height: size || height,
		width: size || width,
		borderRadius,
	};
	return (
		<div style={styles} className={classNames(cls.Skeleton, {}, [className])} />
	);
};

Skeleton.Image = Image;
Skeleton.Avatar = Avatar;
