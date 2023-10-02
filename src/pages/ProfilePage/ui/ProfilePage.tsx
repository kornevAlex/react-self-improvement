import { memo, useEffect } from 'react';
import { DynamicModuleLoader } from 'shared/lib';
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib';
import { useApppDispatch } from 'shared/lib/hooks/useAppDispatch';

const reducers: ReducersList= {
	profile: profileReducer
};
const ProfilePage = memo(() => {
	const dispatch = useApppDispatch();
	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);
	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<ProfileCard />
		</DynamicModuleLoader>
	);
});

export default ProfilePage;
