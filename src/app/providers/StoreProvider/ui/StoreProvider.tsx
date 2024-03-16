import { Provider } from 'react-redux';
import { ReactElement } from 'react';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateScheme';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    children?: ReactElement;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?:  DeepPartial<ReducersMapObject<StateSchema>>
}
export const StoreProvider = (props: StoreProviderProps) => {
  const navigate = useNavigate();
  const {
    children,
    initialState,
    asyncReducers,
  } = props;

  const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>, navigate);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
