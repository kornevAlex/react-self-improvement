import { memo, useCallback, useEffect } from 'react';
import { DynamicModuleLoader } from 'shared/lib';
import { ProfileCard, fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, profileActions, profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib';
import { useApppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList= {
	profile: profileReducer
};
const ProfilePage = memo(() => {
	const dispatch = useApppDispatch();
	const formData = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadonly);

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	const onChangeFirstname = useCallback((value?: string) => {
		dispatch(profileActions.setProfileData({ firstname: value || '' }));
	}, [dispatch]);

	const onChangeLastname = useCallback((value?: string) => {
		dispatch(profileActions.setProfileData({ lastname: value || '' }));
	}, [dispatch]);
	
	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<ProfilePageHeader />
			<ProfileCard
				profile={formData}
				error={error}
				isLoading={isLoading}
				readonly={readonly}
				onChangeFirstname={onChangeFirstname}
				onChangeLastname={onChangeLastname}
			/>
		</DynamicModuleLoader>
	);
});

export default ProfilePage;
