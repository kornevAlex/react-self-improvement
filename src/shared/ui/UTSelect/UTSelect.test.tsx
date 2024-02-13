import { render, screen } from '@testing-library/react';
import { UTSelect } from './UTSelect';
describe('UTSelect', () => {
	test('UTSelect with empty params', () => {
		render(<UTSelect />);
		expect(screen.getByTestId('input')).toBeInTheDocument();
	});
	test('UTSelect with with theme', () => {
		render(<UTSelect placeholder="test"/>);
		expect(screen.getByText('test>')).toHaveClass('placeholder');
	});
});
