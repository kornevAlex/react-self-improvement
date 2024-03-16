import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticleListProps {
  className?: string;
}
export const ArticleList: FC<ArticleListProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={classNames(cls.ArticleList, {}, [className])} >
      
    </div>
  );
};
