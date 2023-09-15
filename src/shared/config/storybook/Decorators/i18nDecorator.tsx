import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTests';

export const i18nDecorator = (Story: Story) => (
	<div>
		<I18nextProvider i18n={i18nForTest}>
			<Story />
		</I18nextProvider>
	</div>
);
