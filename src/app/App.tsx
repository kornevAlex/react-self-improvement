import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import 'shared/config/i18n/i18n';
import { Suspense, useEffect } from 'react';
import { Navbar, Sidebar } from 'widgets';

const App = () => {
	const { theme } = useTheme();

	useEffect(() => {
		const currentTheme = theme;
		document.body.classList.add(theme);

		return () => {
			document.body.classList.remove(currentTheme);
		};
	}, [theme]);

	return (
		<div className={classNames('app', {}, [])}>
			<Suspense fallback="">
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
