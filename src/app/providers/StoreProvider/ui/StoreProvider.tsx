import { Provider } from 'react-redux';
import { ReactElement } from 'react';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateScheme';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactElement;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?:  DeepPartial<ReducersMapObject<StateSchema>>
}
export const StoreProvider = (props: StoreProviderProps) => {
	const {
		children,
		initialState,
		asyncReducers,
	} = props;

	const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};
