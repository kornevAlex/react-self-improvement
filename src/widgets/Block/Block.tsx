import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Block.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Article } from 'entities/Article';

interface BlockProps {
  className?: string;
  item: Article;
}
export const Block: FC<BlockProps> = ({ className, item }) => {
  const { t, i18n } = useTranslation();
  console.log(item);

  return (
    <div className={classNames(cls.ArticleBlock, {}, [className])}>
      {item.title}
    </div>
  );
};
