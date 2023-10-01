import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
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

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.LangSwitcher, {}, [className])} >
			
			</div>
		</DynamicModuleLoader>
	);
});

export default ProfilePage;
