import { createSelector } from '@reduxjs/toolkit';
import { getAuth } from '../getAuth/getAuth';

export const getAuthError = createSelector(
	getAuth,
	(auth) => auth?.error,
);
