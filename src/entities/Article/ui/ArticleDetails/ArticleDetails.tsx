import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { getArticleDetailsLoading, getArticleDetailsData, getArticleDetailsError } from '../../model/selectors/getArticleDetails';
import { requestArticleById } from '../../model/services/requestArticleById';
import { TextSize, TextTheme, UTText } from 'shared/ui/Text/UTText';
import { useApppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { Icon, Avatar, Skeleton } from 'shared/ui';
import EyeIcon from 'shared/img/eye-icos.svg';
import CalendarIcon from 'shared/img/calendar-icon.svg';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = ({ id }) => {
	const { t } = useTranslation();
	const dispatch = useApppDispatch();

	const isLoading = useSelector(getArticleDetailsLoading);
	const error = useSelector(getArticleDetailsError);
	const article = useSelector(getArticleDetailsData);
	
	const renderBlock = useCallback((block: ArticleBlock) => {
		switch (block.type){
		case ArticleBlockType.TEXT: return <ArticleTextBlock key={block.id + block.type} className={cls.articleBlock} block={block}/>;
		case ArticleBlockType.CODE: return <ArticleCodeBlock key={block.id + block.type} block={block} className={cls.articleBlock} />;
		case ArticleBlockType.IMAGE: return <ArticleImageBlock key={block.id + block.type} block={block} className={cls.articleBlock} />;
		default: return null;
		}
	}, []);

	useInitialEffect(() => {
		dispatch(requestArticleById(id));
	});
	
	let content;
	if (isLoading){
		content = (
			<>
				<Skeleton.Avatar className={cls.avatar} size='200px'/>
				<Skeleton width='300px' height='32px'/>
				<Skeleton width='300px' height='24px'/>
				<Skeleton width='100%' height='200px'/>
			</>
		);
	} else if (error){
		content = (
			<UTText title={`${t('something_went_wrong')}: ${error}`} theme={TextTheme.ERROR}/>
		);
	} else {
		content = (
			<>
				<Avatar alt='avatar' src={article?.img} size={200} className={cls.avatar }/>
				<UTText title={article?.title} text={article?.subtitle} size={TextSize.L}/>
				<div className={cls.info}>
					<Icon className={cls.articleIcon} Svg={EyeIcon}/>
					<UTText text={String(article?.views)} />
				</div>
				<div className={cls.info}>
					<Icon className={cls.articleIcon} Svg={CalendarIcon}/>
					<UTText text={article?.createdAt} />
				</div>
				{article?.blocks.map(renderBlock)}
			</>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			{content}
		</DynamicModuleLoader>
	);
};
