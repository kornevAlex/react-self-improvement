import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export default () => {
	const { t } = useTranslation('about')

	return <div>{t('about_page_header')}</div>;
};
