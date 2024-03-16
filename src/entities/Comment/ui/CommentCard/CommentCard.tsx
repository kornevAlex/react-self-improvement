import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { FC } from 'react';
import { CommentType } from '../../model/types/comment';
import { Avatar, Skeleton, UTLink, UTText } from 'shared/ui';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface CommentCardProps {
  className?: string;
  comment?: CommentType
  isLoading: boolean;
}
export const CommentCard: FC<CommentCardProps> = ({ className, comment, isLoading }) => {
  
  if (isLoading){
    return (
      <div className={classNames(cls.CommentCard, {}, [className, cls.loading])} >
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
      <UTLink className={cls.userInfo} to={`${RoutePath.profile}${comment?.user.id}`}>
        {comment?.user.avatar && <Avatar size={30} src={comment?.user.avatar} className={cls.avatar} />}
        <UTText title={`${comment?.user.username}(${comment?.user.role})`}/>
      </UTLink>
     <UTText className={cls.commentText} text={comment?.text} />
   </div>
 );
};
