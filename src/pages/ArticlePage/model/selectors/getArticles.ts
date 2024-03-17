import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesData = ({ articles }: StateSchema) => articles?.data;
export const getArticlesError = ({ articles }: StateSchema) => articles?.error;
export const getArticlesLoading = ({ articles }: StateSchema) => articles?.isLoading;
