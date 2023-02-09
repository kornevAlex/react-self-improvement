import { lazy } from "react";

export const MainPageAsync = lazy(() => import(/* webpackChunkName: "main_page"*/'./MainPage'));