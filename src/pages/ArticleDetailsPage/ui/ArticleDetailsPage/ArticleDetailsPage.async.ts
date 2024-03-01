import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => import(/* webpackChunkName: "article_details_page"*/'./ArticleDetailsPage'));
