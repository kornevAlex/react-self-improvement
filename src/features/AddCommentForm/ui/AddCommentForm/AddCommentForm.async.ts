import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => import(/* webpackChunkName: "add_comment_form"*/'./AddCommentForm'));
