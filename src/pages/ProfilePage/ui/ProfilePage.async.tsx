import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => import(/* webpackChunkName: "profile_page"*/'./ProfilePage'));
