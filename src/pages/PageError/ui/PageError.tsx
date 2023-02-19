import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import cls from './PageError.module.scss';
import { UTButton } from 'shared/ui/UTButton/UTButton';

interface PageErrorProps {
    className?: string;
		error: Error;
}
export const PageError = ({ className, error }: PageErrorProps) => {
	const { t } = useTranslation();

	const reload = () => {
		location.reload();
	};

	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			{t('something_wrong')}
			<UTButton onClick={reload}>
				{t('reload')}
			</UTButton>
		</div>
	);
};
