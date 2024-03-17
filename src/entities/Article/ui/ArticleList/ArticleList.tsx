import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Loader, UTText } from 'shared/ui';

interface ArticleListProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList: FC<ArticleListProps> = ({ className, articles, isLoading, view }) => {
  const { t, i18n } = useTranslation('article');

  if (isLoading){
    return (
      <Loader />
    );
  }
  
  const renderArticle = (article: Article) => (
    <ArticleListItem key={article.id} article={article} view={view} />
  );

  if (isLoading){
    return (
      <div>Загрузка...</div>
    );
  }
  
  return (
    <div className={classNames(cls.ArticleList, {}, [className])} >
      {articles?.length ? articles.map(el => (
        renderArticle(el)
      )): <UTText title={t('articles_not_found')}/> }
    </div>
  );
};
