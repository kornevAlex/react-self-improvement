import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateScheme';
import { counterReducer } from 'entities/Counter';

export function createReduxStore (initialState?: StateSchema){
	return configureStore({
		reducer: {
			counter: counterReducer,
		},
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}
