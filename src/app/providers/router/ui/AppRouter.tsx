import { Suspense, useCallback, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = (
			<Suspense fallback={<PageLoader />}>
				<div className="page-wrapper">
					{route.element}
				</div>
			</Suspense>
		);
		return (
			<Route
				key={route.path}
				path={route.path}
				element={(
					<div className="page-wrapper">
						{route.authOnly ? <RequireAuth>
							{element}
						</RequireAuth>: element}
					</div>
				)}
			/>
		);
	}, []);
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{Object.values(routeConfig).map(renderWithWrapper)}
			</Routes>
		</Suspense>
	);
};
