import { fireEvent, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { Sidebar } from './Sidebar';
import { ComponentRendering } from 'shared/lib/tests/componentRendering/componentRendering';
describe('Sidebar', () => {
	test('Sidebar', () => {
		const SidebarWithTranslation = withTranslation()(Sidebar);
		ComponentRendering(<SidebarWithTranslation />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('Sidebar toggle', () => {
		const SidebarWithTranslation = withTranslation()(Sidebar);
		ComponentRendering(<SidebarWithTranslation />);
		const button = screen.getByTestId('sidebar-toggle');

		fireEvent.click(button);

		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
