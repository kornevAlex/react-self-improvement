import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { FC } from 'react';
import { CommentType } from '../../model/types/comment';
import { Avatar, Skeleton, UTText } from 'shared/ui';

interface CommentCardProps {
  className?: string;
  comment: CommentType
  isLoading: boolean;
}
export const CommentCard: FC<CommentCardProps> = ({ className, comment, isLoading }) => {
  const { id, text, user } = comment;

  if (isLoading){
    return (
      <div className={classNames(cls.CommentCard, {}, [className])} >
       <div className={cls.userInfo}>
        <Skeleton.Avatar size='30px' className={cls.avatar}/>
        <Skeleton width='100px' height='16px' />
       </div>
        <Skeleton width='100%' height='50px' className={cls.commentText} />
      </div>
    );
  }

 return (
   <div className={classNames(cls.CommentCard, {}, [className])} >
    <div className={cls.userInfo}>
      {user.avatar && <Avatar size={30} src={user.avatar} className={cls.avatar} />}
      <UTText title={user.username}/>
    </div>
     <UTText className={cls.commentText} text={text} />
   </div>
 );
};
