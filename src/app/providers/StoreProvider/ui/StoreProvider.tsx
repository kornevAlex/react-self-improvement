import { Provider } from 'react-redux';
import { ReactElement } from 'react';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateScheme';
import { DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactElement;
	initialState?: DeepPartial<StateSchema>;
}
export const StoreProvider = (props: StoreProviderProps) => {
	const {
		children,
		initialState,
	} = props;

	const store = createReduxStore(initialState as StateSchema);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};
