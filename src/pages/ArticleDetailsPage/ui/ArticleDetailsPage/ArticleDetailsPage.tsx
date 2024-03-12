import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';

interface ArticleDetailsPageProps {
  className?: string;
}
const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
	const { t, i18n } = useTranslation('article');
	const { id } = useParams<{id: string}>();

	if (!id){
		return (
			<div>
				{t('article_not_found')}
			</div>
		);
	}

	return (
		<div className={classNames(cls.ArticleDetailsPage, {}, [className])} >
			<ArticleDetails id={id} />
		</div>
	);
};

export default memo(ArticleDetailsPage);
