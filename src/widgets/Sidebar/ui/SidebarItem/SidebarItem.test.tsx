import { fireEvent, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { SidebarItem } from './SidebarItem';
import { ComponentRendering } from 'shared/lib/tests/componentRendering/componentRendering';
describe('Sidebar', () => {
	test('Sidebar', () => {
		const SidebarItemWithTranslation = withTranslation()(SidebarItem);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('Sidebar toggle', () => {
		const SidebarItemWithTranslation = withTranslation()(SidebarItem);
		const button = screen.getByTestId('sidebar-toggle');

		fireEvent.click(button);

		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
