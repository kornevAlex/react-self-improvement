import { Article } from 'entities/Article';

export interface ArticlesSchema {
    isLoading: boolean;
    data?: Article[]
    error?: string;
}
