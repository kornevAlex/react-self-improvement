import { lazy } from 'react';

export const ArticlePageAsync = lazy(() => import(/* webpackChunkName: "article_page"*/'./ArticlePage'));
