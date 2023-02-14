import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { UTButton } from 'shared/ui/UTButton/UTButton';
import { LangSwitcher, ThemeSwitcher } from 'widgets';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
	const [ collapsed, setCollapsed ] = useState(false);
	const { t } = useTranslation();

	const onToggle = () => {
		setCollapsed(prev => !prev);
	};
	return (
		<div
			className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<UTButton onClick={onToggle}>
				{t('open')}
			</UTButton>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang}/>
			</div>
		</div>
	);
};
