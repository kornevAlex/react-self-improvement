import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticleListItemProps {
  className?: string;
}
export const ArticleListItem: FC<ArticleListItemProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className])} >
     
    </div>
  );
};
