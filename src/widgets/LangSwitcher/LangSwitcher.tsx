import { classNames } from 'shared/lib';
import cls from './LangSwitcher.module.scss';
import { ButtonTheme, UTButton } from 'shared/ui/UTButton/UTButton';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
		short?: boolean;
}
export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();
	const toggleLanguage = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<UTButton
			className={classNames(cls.LangSwitcher, {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={toggleLanguage}
		>
			{short ? i18n.language : t('language')}
		</UTButton>
	);
};
