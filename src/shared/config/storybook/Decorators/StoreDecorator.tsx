import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { authReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib';

const defaultAsyncReducers: ReducersList = {
	auth: authReducer,
	profile: profileReducer,
};

export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: ReducersList,
) => (Story: Story) => (
	<StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
		<Story />
	</StoreProvider>
);
