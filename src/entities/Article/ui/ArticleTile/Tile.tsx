import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tile.module.scss';
import { FC } from 'react';
import { Article } from 'entities/Article';
import { Avatar, UTLink, UTText } from 'shared/ui';
import { RoutePath } from 'shared/config';
import { TextSize } from 'shared/ui/Text/UTText';
import { Card } from 'shared/ui';

interface TileProps {
  className?: string;
  item: Article;
}
export const Tile: FC<TileProps> = ({ className, item }) => {
  const { user, createdAt, id, subtitle, title, type, img } = item;
  
  return (
    <Card>
      <div className={classNames(cls.Tile, {}, [className])}>
        <div className={cls.header}>
          <UTLink className={cls.userInfo} to={`${RoutePath.profile}${user?.id}`}>
            {user?.avatar && <Avatar size={30} src={user.avatar} className={cls.avatar} />}
            <UTText title={`${user?.username}`}/>
          </UTLink>
          {createdAt}
        </div>
        <UTText title={title} size={TextSize.L} text={type?.join(' ')} />
        <img src={img} alt={title} className={cls.img} />
      </div>
    </Card>
  );
};
