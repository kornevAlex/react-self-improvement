import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { ThemeButton, UTButton } from 'shared/ui/UTButton/UTButton';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();
	const toggleLanguage = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<UTButton
			className={classNames(cls.LangSwitcher, {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={toggleLanguage}
		>
			{t('language')}
		</UTButton>
	);
};
