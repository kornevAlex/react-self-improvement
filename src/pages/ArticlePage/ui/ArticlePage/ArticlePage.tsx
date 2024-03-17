import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';
import { FC, memo, useEffect } from 'react';
import { ArticleList } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { DynamicModuleLoader, ReducersList, useAppDispatch, useInitialEffect } from 'shared/lib';
import { useSelector } from 'react-redux';
import { Loader, UTText } from 'shared/ui';
import { articlesReducer } from '../../model/slices/articlesSlice';
import { requestArticles } from '../../model/services/requestArticles';
import { getArticlesError, getArticlesData, getArticlesLoading } from '../../model/selectors/getArticles';

interface ArticlePageProps {
  className?: string;
}

const reducers: ReducersList = {
  articles: articlesReducer,
};

const ArticlePage: FC<ArticlePageProps> = ({ className }) => {
  const articles = useSelector(getArticlesData);
  const isLoading = useSelector(getArticlesLoading);
  const error = useSelector(getArticlesError);
  const dispatch = useAppDispatch();


  useInitialEffect(() => {
    dispatch(requestArticles());
  });

  if (isLoading){
    return (
      <Loader />
    );
  }

  if (error){
    return (
      <UTText title={error} />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticlePage, {}, [className])}>
        <ArticleList articles={articles} view={ArticleView.BLOCK} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlePage);
