import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlock.module.scss';
import { FC } from 'react';
import { Code } from 'shared/ui';
import { ArticleCodeBlock as CodeBlock } from '../..//model/types/article';

interface ArticleCodeBlockProps {
  className?: string;
  block: CodeBlock;
}
export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = ({ className, block }) => {

  return (
    <div className={classNames(cls.ArticleCodeBlock, {}, [className])}>
      <Code>
        {block.code}
      </Code>
    </div>
  );
};
