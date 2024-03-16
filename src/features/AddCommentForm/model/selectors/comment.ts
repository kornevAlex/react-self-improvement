import { StateSchema } from 'app/providers/StoreProvider';

export const getCommentText = (state: StateSchema) => state.addCommentForm?.text || '';
export const getCommentError = (state: StateSchema) => state.addCommentForm?.error;
export const getCommentLoading = (state: StateSchema) => state.addCommentForm?.isLoading;
