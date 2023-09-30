import { createSelector } from '@reduxjs/toolkit';
import { getAuth } from '../getAuth/getAuth';

export const getAuthUsername = createSelector(
	getAuth,
	(auth) => auth.username || '',
);
