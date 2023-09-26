import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { authReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	auth: authReducer,
};

export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (Story: Story) => (
	<StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
		<Story />
	</StoreProvider>
);
