import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticlePageProps {
  className?: string;
}
const ArticlePage: FC<ArticlePageProps> = ({ className }) => {
	const { t, i18n } = useTranslation();

	return (
		<div className={classNames(cls.ArticlePage, {}, [className])} >
     ARTICLE PAGE
		</div>
	);
};

export default memo(ArticlePage);
