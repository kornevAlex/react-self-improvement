import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { UTText } from 'shared/ui';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { AddCommentForm } from 'features/AddCommentForm';
import { articleDetailsCommentReducer, getArticleComments } from '../../model/slice/ArticleDetailsCommentSlice';
import { getArticleDetailsCommentLoading } from '../../model/selectors/comments';
import { fetchCommentArticleById } from '../../model/services/fetchCommentArticleById';
import { sendCommentForArticle } from '../../model/services/sendCommentForArticle';

interface ArticleDetailsPageProps {
  className?: string;
}
const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
	const { t } = useTranslation('article');
	const { id = '' } = useParams<{id: string}>();
	const comments = useSelector(getArticleComments.selectAll);
	const commentIsLoading = useSelector(getArticleDetailsCommentLoading) || false;
	const dispatch = useAppDispatch();
	const reducers: ReducersList = {
		articleDetailsComments: articleDetailsCommentReducer,
	};
	
	useInitialEffect(() => {
		dispatch(fetchCommentArticleById(id));
	});
	const onSendComment = useCallback((text) => {
		dispatch(sendCommentForArticle(text));
	}, [dispatch]);

	if (!id){
		return (
			<div>
				{t('article_not_found')}
			</div>
		);
	}


	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.ArticleDetailsPage, {}, [className])} >
				<ArticleDetails id={id} />
				<UTText className={cls.commentTitle} title={t('comments')} />
				<AddCommentForm onSendComment={onSendComment}/>
				<CommentList isLoading={commentIsLoading} className={cls.commentList} comments={comments} />
			</div>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);
