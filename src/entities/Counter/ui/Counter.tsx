import { useDispatch, useSelector } from 'react-redux';
import { CounterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
	const dispatch = useDispatch();
	const value = useSelector(getCounterValue);

	const increment = () => {
		dispatch(CounterActions.increment());
	};

	const decrement = () => {
		dispatch(CounterActions.decrement());
	};

	return (
		<div>
			<h1 data-testid="value-title">{value}</h1>
			<button data-testid="increment-btn" onClick={increment}>+</button>
			<button data-testid="decrement-btn" onClick={decrement}>-</button>
		</div>
	);
};
