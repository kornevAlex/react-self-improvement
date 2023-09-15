import { screen } from '@testing-library/react';
import { Counter } from './Counter';
import { ComponentRendering } from 'shared/lib/tests/componentRendering/componentRendering';
import { userEvent } from '@storybook/testing-library';
describe('Counter tests', () => {
	test('Render counter', () => {
		ComponentRendering(<Counter />, { initialState: { counter: { value: 10 } } });
		expect(screen.getByTestId('value-title')).toHaveTextContent('10');
	});
	test('counter increment', () => {
		ComponentRendering(<Counter />, { initialState: { counter: { value: 10 } } });
		userEvent.click(screen.getByTestId('increment-btn'));
		expect(screen.getByTestId('value-title')).toHaveTextContent('11');
	});
	test('counter decarement', () => {
		ComponentRendering(<Counter />, { initialState: { counter: { value: 10 } } });
		userEvent.click(screen.getByTestId('decrement-btn'));
		expect(screen.getByTestId('value-title')).toHaveTextContent('9');
	});
});
