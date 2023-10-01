import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib';

const reducers: ReducersList= {
	profile: profileReducer
};

interface ProfilePageProps {
    className?: string;
}
const ProfilePage = memo(({ className }: ProfilePageProps) => {
	const { t } = useTranslation('profile');
	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div>
				{t('profile-page')}
			</div>
		</DynamicModuleLoader>
	);
});

export default ProfilePage;
