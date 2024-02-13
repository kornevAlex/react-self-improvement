import { memo, useCallback, useEffect } from 'react';
import { DynamicModuleLoader } from 'shared/lib';
import { ProfileCard, requestProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, profileActions, profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib';
import { useApppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

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
		dispatch(requestProfileData());
	}, [dispatch]);

	const onChangeFirstname = useCallback((value?: string) => {
		dispatch(profileActions.setProfileData({ firstname: value || '' }));
	}, [dispatch]);

	const onChangeLastname = useCallback((value?: string) => {
		dispatch(profileActions.setProfileData({ lastname: value || '' }));
	}, [dispatch]);

	const onChangeAge = useCallback((value?: string) => {
		dispatch(profileActions.setProfileData({ age: Number(value || 0) }));
	}, [dispatch]);

	const onChangeCity = useCallback((value?: string) => {
		dispatch(profileActions.setProfileData({ city: value || '' }));
	}, [dispatch]);

	const onChangeAvatar = useCallback((value?: string) => {
		dispatch(profileActions.setProfileData({ avatar: value || '' }));
	}, [dispatch]);

	const onChangeUsername = useCallback((value?: string) => {
		dispatch(profileActions.setProfileData({ username: value || '' }));
	}, [dispatch]);

	const onChangeCurrency = useCallback((currency?: Currency) => {
		dispatch(profileActions.setProfileData({ currency }));
	}, [dispatch]);
	
	const onChangeCountry = useCallback((country?: Country) => {
		dispatch(profileActions.setProfileData({ country }));
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
				onChangeAge={onChangeAge}
				onChangeCity={onChangeCity}
				onChangeAvatar={onChangeAvatar}
				onChangeUsername={onChangeUsername}
				onChangeCurrency={onChangeCurrency}
				onChangeCountry={onChangeCountry}
			/>
		</DynamicModuleLoader>
	);
});

export default ProfilePage;
