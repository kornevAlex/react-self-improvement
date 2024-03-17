import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tile.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Article } from 'entities/Article';

interface TileProps {
  className?: string;
  item: Article;
}
export const Tile: FC<TileProps> = ({ className, item }) => {
  const { t, i18n } = useTranslation();
  console.log(item);
  
  return (
    <div className={classNames(cls.Tile, {}, [className])} >
      {item?.title}
    </div>
  );
};
