import { lazy } from 'react';

export const LoginFormAsync = lazy(() => import(/* webpackChunkName: "login_form"*/'./LoginForm'));
