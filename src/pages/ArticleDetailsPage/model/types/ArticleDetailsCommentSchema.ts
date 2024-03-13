import { EntityState } from '@reduxjs/toolkit';
import { CommentType } from 'entities/Comment/model/types/comment';

export interface ArticleDetailsCommentSchema extends EntityState<CommentType> {
    error?: string;
    isLoading: boolean;
}
