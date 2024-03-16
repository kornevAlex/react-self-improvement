import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlock.module.scss';
import { memo } from 'react';
import { ArticleTextBlock as IArticleTextBlock } from '../../model/types/article';
import { UTText } from 'shared/ui/Text/UTText';



interface ArticleTextBlockProps {
  className?: string;
  block: IArticleTextBlock;
}
export const ArticleTextBlock = memo(({ className, block }: ArticleTextBlockProps) => {
  return (
    <div className={classNames(cls.ArticleTextBlock, {}, [className])}>
      {block.title && (
        <UTText title={block.title} className={cls.title} />
      )}
      {block.paragraphs.map((paragraph, i) => (
        <UTText key={paragraph + i} text={paragraph} className={cls.paragraph} />
      ))}
    </div>
  );
});
