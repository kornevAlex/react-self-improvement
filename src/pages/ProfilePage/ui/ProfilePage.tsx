import { memo, useCallback } from 'react';
import { DynamicModuleLoader, useActionCreators } from 'shared/lib';
import { ProfileCard, requestProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, profileActions, profileReducer, getProfileValidateError } from 'entities/Profile';
import { ReducersList } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { TextTheme, UTText } from 'shared/ui/Text/UTText';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useParams } from 'react-router-dom';

const reducers: ReducersList= {
	profile: profileReducer
};
const ProfilePage = memo(() => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { setProfileData } = useActionCreators(profileActions);
	const formData = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadonly);
	const validateErrors = useSelector(getProfileValidateError);

	useInitialEffect(() => {
		if (!id) return;
		dispatch(requestProfileData(id));
	});

	const onChangeFirstname = useCallback((value?: string) => {
		setProfileData({ firstname: value || '' });
	}, [setProfileData]);

	const onChangeLastname = useCallback((value?: string) => {
		setProfileData({ lastname: value || '' });
	}, [setProfileData]);

	const onChangeAge = useCallback((value?: string) => {
		setProfileData({ age: Number(value || 0) });
	}, [setProfileData]);

	const onChangeCity = useCallback((value?: string) => {
		setProfileData({ city: value || '' });
	}, [setProfileData]);

	const onChangeAvatar = useCallback((value?: string) => {
		setProfileData({ avatar: value || '' });
	}, [setProfileData]);

	const onChangeUsername = useCallback((value?: string) => {
		setProfileData({ username: value || '' });
	}, [setProfileData]);

	const onChangeCurrency = useCallback((currency?: Currency) => {
		setProfileData({ currency });
	}, [setProfileData]);
	
	const onChangeCountry = useCallback((country?: Country) => {
		setProfileData({ country });
	}, [setProfileData]);
	
	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<ProfilePageHeader />
			{validateErrors?.length && validateErrors.map((err, i) => (
				<UTText key={i} text={err} theme={TextTheme.ERROR} />
			))}
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
