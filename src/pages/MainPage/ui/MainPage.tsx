import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() =>{
	const { t } = useTranslation('main');
	return (
		<div>
			{t('main_page_header')}
		</div>
	);
});

export default MainPage;
