import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';

interface componentRenderingProps {
  route?: string;
}

export function ComponentRendering (component: ReactNode, options: componentRenderingProps = {}){
	const {
		route = '/'
	} = options;

	return render(
		<MemoryRouter initialEntries={[route]}>
			<I18nextProvider i18n={i18nForTest}>
				{component}
			</I18nextProvider>
		</MemoryRouter>
	);
}
