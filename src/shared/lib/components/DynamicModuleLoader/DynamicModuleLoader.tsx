import { Reducer } from '@reduxjs/toolkit';
import { ReducStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateScheme';
import { memo, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps {
	reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}
export const DynamicModuleLoader= memo(({ children, reducers, removeAfterUnmount = true }: DynamicModuleLoaderProps) => {

  const store = useStore() as ReducStoreWithManager;
  const dispatch = useDispatch();
  
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });
    console.log(store.getState());
    

    return () => {
      if (removeAfterUnmount){
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {children}
    </>
  );
});
