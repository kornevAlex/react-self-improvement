import { createSelector } from '@reduxjs/toolkit';
import { getAuth } from '../getAuth/getAuth';

export const getAuthisLoading = createSelector(
	getAuth,
	(auth) => auth?.isLoading || false,
);
