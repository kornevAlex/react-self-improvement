import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, Config>{
	getState: () => StateSchema;
	dispatch: Dispatch;
	thunkActionCreator: ActionCreatorType<Return, Arg, Config>;
	navigate: jest.MockedFn<any>;
	api: jest.MockedFunctionDeep<AxiosStatic>;

	constructor (thunkActionCreator: ActionCreatorType<Return, Arg, Config>){
		this.thunkActionCreator = thunkActionCreator;
		this.dispatch = jest.fn();
		this.getState = jest.fn();
		this.api = mockedAxios;
		this.navigate = jest.fn();
	}


	async callThunk (arg: Arg){
		const actionCreator = this.thunkActionCreator(arg);
		const result = await actionCreator(this.dispatch, this.getState, 
			{
				api: this.api,
				navigate: this.navigate
			}	
		);
		return result;
	}
}
