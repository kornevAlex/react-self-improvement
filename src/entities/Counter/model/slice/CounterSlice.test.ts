import { counterReducer, CounterActions } from './CounterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('CounterSlice.test', () => {
	test('counter slice decrement', () => {
		const state: CounterSchema = {
			value: 1
		};
		expect(counterReducer(state, CounterActions.decrement())).toEqual({ value: 0 });
	});

	test('counter slice increment', () => {
		const state: CounterSchema = {
			value: 1
		};
		expect(counterReducer(state, CounterActions.increment())).toEqual({ value: 2 });
	});

	test('should work without state', () => {
		expect(counterReducer(undefined, CounterActions.increment())).toEqual({ value: 1 });
	});
});
