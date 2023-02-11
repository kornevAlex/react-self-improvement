import React from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
	const { t } = useTranslation('main')
    return (
        <div>
            {t('main_page_header')}
        </div>
    );
}

export default MainPage;