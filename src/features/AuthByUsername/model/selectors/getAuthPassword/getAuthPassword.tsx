import { createSelector } from '@reduxjs/toolkit';
import { getAuth } from '../getAuth/getAuth';

export const getAuthPassword = createSelector(
	getAuth,
	(auth) => auth.password || '',
);
