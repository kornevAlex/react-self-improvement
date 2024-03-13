import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { UTText } from 'shared/ui';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { articleDetailsCommentReducer, getArticleComments } from '../../model/slice/ArticleDetailsCommentSlice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { getArticleDetailsCommentLoading } from 'pages/ArticleDetailsPage/model/selectors/comments';
import { useApppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchCommentArticleById } from '../../model/services/fetchCommentArticleById';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';

interface ArticleDetailsPageProps {
  className?: string;
}
const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
	const { t } = useTranslation('article');
	const { id } = useParams<{id: string}>();
	const comments = useSelector(getArticleComments.selectAll);
	const commentIsLoading = useSelector(getArticleDetailsCommentLoading) || false;
	const dispatch = useApppDispatch();
	const reducers: ReducersList = {
		articleDetailsComments: articleDetailsCommentReducer,
	}; 

	useInitialEffect(() => {
		dispatch(fetchCommentArticleById(id));
	});

	if (!id){
		return (
			<div>
				{t('article_not_found')}
			</div>
		);
	}


	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
			<div className={classNames(cls.ArticleDetailsPage, {}, [className])} >
				<ArticleDetails id={id} />
				<UTText className={cls.commentTitle} title={t('comments')} />
				<CommentList isLoading={commentIsLoading} className={cls.commentList} comments={comments} />
			</div>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);
