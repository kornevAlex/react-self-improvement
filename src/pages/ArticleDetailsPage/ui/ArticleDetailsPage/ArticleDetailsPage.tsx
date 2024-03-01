import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
  className?: string;
}
const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
	const { t, i18n } = useTranslation();

	return (
		<div className={classNames(cls.ArticleDetailsPage, {}, [className])} >
     ARTICLE DETAILS PAGE
		</div>
	);
};

export default memo(ArticleDetailsPage);
