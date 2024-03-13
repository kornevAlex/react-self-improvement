import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { FC } from 'react';
import { CommentType } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments: CommentType[];
  isLoading: boolean;
}
export const CommentList: FC<CommentListProps> = ({ className, comments, isLoading }) => {

 return (
   <div className={classNames(cls.CommentList, {}, [className])} >
     {comments.map((comment) => (
      <CommentCard key={comment.id} comment={comment} isLoading={isLoading} />
     ))}
   </div>
 );
};
