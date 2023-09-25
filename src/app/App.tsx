import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import 'shared/config/i18n/i18n';
import { Suspense, useEffect } from 'react';
import { Navbar, Sidebar } from 'widgets';
import { userActions } from 'entities/User';
import { useDispatch } from 'react-redux';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

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
