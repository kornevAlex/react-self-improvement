import { render, screen } from '@testing-library/react';
import { UTInput } from './UTInput';
describe('UTInput', () => {
  test('UTInput with empty params', () => {
    render(<UTInput />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });
  test('UTInput with with theme', () => {
    render(<UTInput placeholder="test"/>);
    expect(screen.getByText('test>')).toHaveClass('placeholder');
  });
});
