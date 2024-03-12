import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon, UTButton } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/UTButton/UTButton';
import Copy from 'shared/img/copy.svg';

interface CodeProps {
  className?: string;
  children: string;
}
export const Code: FC<CodeProps> = ({ className, children }) => {
	const { t, i18n } = useTranslation();

	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(children).then(() => {
			// Succesful
		});
	}, [children]);

	return (
		<pre className={classNames(cls.code, {}, [className])}>
			<UTButton onClick={onCopy} className={cls.copyButton} theme={ButtonTheme.CLEAR}>
				<Icon Svg={Copy} className={cls.copyIcon} />
			</UTButton>
			<code>
				{children}
			</code>
		</pre>
	);
};
