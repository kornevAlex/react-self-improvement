import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlock.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Code } from 'shared/ui';
import { ArticleCodeBlock as CodeBlock } from '../..//model/types/article';

interface ArticleCodeBlockProps {
  className?: string;
  block: CodeBlock;
}
export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = ({ className, block }) => {
	const { t, i18n } = useTranslation();

	return (
		<div className={classNames(cls.ArticleCodeBlock, {}, [className])}>
			<Code>
				{block.code}
			</Code>
		</div>
	);
};
