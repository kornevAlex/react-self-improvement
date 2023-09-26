import { Reducer } from '@reduxjs/toolkit';
import { ReducStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateScheme';
import { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

interface DynamicModuleLoaderProps {
    children: ReactElement;
    name: StateSchemaKey;
    reducer: Reducer;
    removeAfterUnmount?: boolean;
}
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({ name, reducer, children, removeAfterUnmount }) => {

	const store = useStore() as ReducStoreWithManager;
	const dispatch = useDispatch();

	useEffect(() => {
		store.reducerManager.add(name, reducer);
		dispatch({ type: `@INIT ${name} reducer` });

		return () => {
			if (removeAfterUnmount){
				store.reducerManager.remove(name);
				dispatch({ type: `@DESTROY ${name} reducer` });
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
