import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../model/types/article';
import { Block, Tile } from 'widgets';

interface ArticleListItemProps {
  article: Article;
  className?: string;
  view?: ArticleView;
}
export const ArticleListItem: FC<ArticleListItemProps> = ({ className, article, view }) => {
  const { t, i18n } = useTranslation();
  const renderArticleItem = useCallback(() => {
    if (view === ArticleView.BLOCK){
      return <Block item={article} />;
    } else if (view === ArticleView.TILE){
      return <Tile item={article} />;
    }
  }, [article, view]);
  return (
    <div className={classNames(cls.ArticleListItem, {}, [className])} >
      {renderArticleItem()}
    </div>
  );
};
