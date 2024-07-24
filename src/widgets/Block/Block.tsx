import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Block.module.scss';
import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Article } from 'entities/Article';
import { Avatar, UTLink, UTText } from 'shared/ui';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { TextSize } from 'shared/ui/Text/UTText';
import { ArticleBlockType, ArticleTextBlock as ArticleTextBlockType  } from 'entities/Article/model/types/article';
import { ArticleTextBlock } from 'entities/Article/ui/ArticleTextBlock/ArticleTextBlock';

interface BlockProps {
  className?: string;
  item: Article;
}
export const Block: FC<BlockProps> = ({ className, item }) => {
  const { t, i18n } = useTranslation();
  const { user, blocks, createdAt, id, subtitle, title, type, img } = item;

  return (
    <div className={classNames(cls.Block, {}, [className])}>
      <div className={cls.header}>
        <UTLink className={cls.userInfo} to={`${RoutePath.profile}${user?.id}`}>
          {user?.avatar && <Avatar size={30} src={user.avatar} className={cls.avatar} />}
          <UTText title={`${user?.username}`}/>
        </UTLink>
        {createdAt}
      </div>
      <UTText title={title} size={TextSize.L} text={type.join(' ')} />
      <img src={img} alt="" className={cls.img} />

    </div>
  );
};
