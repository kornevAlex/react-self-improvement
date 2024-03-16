import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AvatarSkeleton.module.scss';
import parentCls from '../Skeleton.module.scss';
import { CSSProperties, FC } from 'react';
import Avatar from './AvatarSkeleton.svg';
import { SkeletonProps } from '../Skeleton';

export const AvatarSkeleton: FC<SkeletonProps> = ({ height, width, borderRadius, size, className }) => {

  const styles: CSSProperties = {
    borderRadius: borderRadius || '50%',
    height: size || height,
    width: size || width,
  };
  
  return (
    <div style={styles} className={classNames(cls.Avatar, {}, [parentCls.Skeleton, className])}>
      <Avatar />
    </div>
  );
};
