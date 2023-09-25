import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateScheme';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { authReducer } from 'features/AuthByUsername';

export function createReduxStore (initialState?: StateSchema){
	const rootRedusers: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
		auth: authReducer,
	};

	return configureStore<StateSchema>({
		reducer: rootRedusers,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}
