import { render, screen } from '@testing-library/react';
import { UTSelect } from './UTSelect';
describe('UTSelect', () => {
	test('UTSelect with empty params', () => {
		render(<UTSelect />);
		expect(screen.getByTestId('select')).toBeInTheDocument();
	});
	test('UTSelect with with theme', () => {
		render(<UTSelect label="test"/>);
		expect(screen.getByText('test')).toHaveClass('label');
	});
});
