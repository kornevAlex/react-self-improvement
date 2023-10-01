import { render, screen } from '@testing-library/react';
import { TextTheme, UTText } from './UTText';
describe('UTText', () => {
	test('UTText with empty params', () => {
		render(<UTText text='TEST'/>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});
});
