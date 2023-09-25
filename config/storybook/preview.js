import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook';
export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	themes: {
		default: 'light',
		list: [
			{ name: 'light', class: 'light', color: '#dedee7' },
			{ name: 'dark', class: 'dark', color: '#0a0a4d' }
		],
	},
};

addDecorator(StyleDecorator);