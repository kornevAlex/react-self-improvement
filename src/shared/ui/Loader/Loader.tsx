import React from 'react';
import cls from './Loader.module.scss';
import { classNames } from 'shared/lib';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large'; // Размер лоадера
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ size = 'medium', className }) => {
  return (
	<div className={classNames(cls.loader, {}, [className, cls[`loader-${size}`]])}>
      <div className={cls['loader-inner']} />
    </div>
  );
};
