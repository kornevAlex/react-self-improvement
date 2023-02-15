import { fireEvent, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation';
describe('Sidebar', () => {
	test('Sidebar', () => {
		const SidebarWithTranslation = withTranslation()(Sidebar);
		renderWithTranslation(<SidebarWithTranslation />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('Sidebar toggle', () => {
		const SidebarWithTranslation = withTranslation()(Sidebar);
		renderWithTranslation(<SidebarWithTranslation />);
		const button = screen.getByTestId('sidebar-toggle');

		fireEvent.click(button);

		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
