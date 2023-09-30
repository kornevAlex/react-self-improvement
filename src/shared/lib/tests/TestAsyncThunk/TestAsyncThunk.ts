import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Arg, Config>{
	getState: () => StateSchema;
	dispatch: Dispatch;
	thunkActionCreator: ActionCreatorType<Return, Arg, Config>;

	constructor (thunkActionCreator: ActionCreatorType<Return, Arg, Config>){
		this.thunkActionCreator = thunkActionCreator;
		this.dispatch = jest.fn();
		this.getState = jest.fn();
	}

	async callThunk (arg: Arg){
		const actionCreator = this.thunkActionCreator(arg);
		const result = await actionCreator(this.dispatch, this.getState, undefined);
		return result;
	}
}
