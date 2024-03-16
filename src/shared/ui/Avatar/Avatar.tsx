import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { CSSProperties, FC, ImgHTMLAttributes, memo, useMemo } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    size?: number;
}

export const Avatar: FC<AvatarProps> = memo(({ src, className, alt, size }: AvatarProps) => {

  const styles = useMemo<CSSProperties>(() => {
    return{
      width: size || 100,
      height: size || 100,
    };
  }, [size]);

  return (
    <img 
      className={classNames(cls.Avatar, {}, [className])}  
      src={src} 
      style={styles}
      alt={alt}
    /> 
  );
});
