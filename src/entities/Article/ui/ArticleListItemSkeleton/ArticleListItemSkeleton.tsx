import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItemSkeleton.module.scss';
import { FC } from 'react';
import { Card, Skeleton } from 'shared/ui';
import { ArticleView } from '../../model/types/article';

interface ArticleListItemProps {
  className?: string;
  view: ArticleView
}

export const ArticleListItemSkeleton: FC<ArticleListItemProps> = ({ className, view }) => {
  
  return (
    <Card>
      {view === ArticleView.TILE && (
        <div className={classNames(cls.ArticleListItemSkeleton, {}, [className])}>
          <div className={cls.header}>
            <Skeleton size='32px' borderRadius='50px'className={cls.HeaderSkeleton} />
            <Skeleton width='100px' height='32px' className={cls.HeaderSkeleton} />
          </div>
          <Skeleton width='300px' height='25px' />
          <Skeleton width='100px' height='25px' />
          <Skeleton width='100%' height='240px' />
          <Skeleton width='30%' height='25px' />
          <Skeleton width='100%' height='160px' />
        </div>
      )}
      {view === ArticleView.BLOCK && (
        <div className={classNames(cls.ArticleListItemSkeleton, {}, [className])}>
          <Skeleton width='300px' height='290px' />
        </div>
      )}
    </Card>
    
  );
};
