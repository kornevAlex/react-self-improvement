import { render, screen } from '@testing-library/react';
import { ThemeButton, UTButton } from './UTButton';
describe('UTButton', () => {
	test('UTButton with empty params', () => {
		render(<UTButton>TEST</UTButton>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});
	test('UTButton with with theme', () => {
		render(<UTButton theme={ThemeButton.CLEAR}>TEST</UTButton>);
		expect(screen.getByText('TEST')).toHaveClass('clear');
	});
});
