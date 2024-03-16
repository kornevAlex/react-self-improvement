import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlock.module.scss';
import { memo } from 'react';
import { ArticleImageBlock as ImageBlock } from 'entities/Article/model/types/article';
import { UTText } from 'shared/ui';
import { TextAlign } from 'shared/ui/Text/UTText';

interface ArticleImageBlockProps {
  className?: string;
  block: ImageBlock;
}

export const ArticleImageBlock = memo(({ className, block }: ArticleImageBlockProps) => {

  return (
    <div className={classNames(cls.ArticleImageBlock, {}, [className])}>
      <img className={cls.image} src={block.src} alt={block.title} />
      {block.title && (
        <UTText className={cls.title} text={block.title} align={TextAlign.CENTER} />
      )}
    </div>
  );
});
