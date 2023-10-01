import { Reducer } from '@reduxjs/toolkit';
import { ReducStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateScheme';
import { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}
type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
	reducers: ReducersList;
    removeAfterUnmount?: boolean;
}
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({ children, reducers, removeAfterUnmount }) => {

	const store = useStore() as ReducStoreWithManager;
	const dispatch = useDispatch();

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
			store.reducerManager.add(name, reducer);
			dispatch({ type: `@INIT ${name} reducer` });
		});

		return () => {
			if (removeAfterUnmount){
				Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
					store.reducerManager.remove(name);
					dispatch({ type: `@DESTROY ${name} reducer` });
				});
			}
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			{children}
		</>
	);
};
