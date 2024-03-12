import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsData = ({ articleDetails }: StateSchema) => articleDetails?.data;
export const getArticleDetailsError = ({ articleDetails }: StateSchema) => articleDetails?.error;
export const getArticleDetailsLoading = ({ articleDetails }: StateSchema) => articleDetails?.isLoading;
