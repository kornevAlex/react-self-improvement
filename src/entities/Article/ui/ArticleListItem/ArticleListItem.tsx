import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { FC, useCallback } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import { Block } from '../ArticleBlock/Block';
import { Tile } from '../ArticleTile/Tile';
import { RoutePath } from 'shared/config';
import { useNavigate } from 'react-router-dom';

interface ArticleListItemProps {
  article: Article;
  className?: string;
  view?: ArticleView;
}
export const ArticleListItem: FC<ArticleListItemProps> = ({ className, article, view }) => {
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  const renderArticleItem = useCallback(() => {
    if (view === ArticleView.BLOCK){
      return <Block item={article} />;
    } else if (view === ArticleView.TILE){
      return <Tile item={article} />;
    }
  }, [article, view]);
  
  return (
    <div className={classNames(cls.ArticleListItem, {}, [className])} onClick={onOpenArticle}>
      {renderArticleItem()}
    </div>
  );
};
