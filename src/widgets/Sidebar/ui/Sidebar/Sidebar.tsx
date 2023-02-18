import { ButtonSize, ButtonTheme, UTButton } from 'shared/ui/UTButton/UTButton';
import { LangSwitcher, ThemeSwitcher } from 'widgets';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useState } from 'react';
import { UTLink } from 'shared/ui';
import cls from './Sidebar.module.scss';
import Home from 'shared/img/home-outline.svg';
import Info from 'shared/img/info-outline.svg';

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
	const [ collapsed, setCollapsed ] = useState(false);
	const { t } = useTranslation();

	const onToggle = async () => {
		setCollapsed(prev => !prev);
	};
	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<div className={cls.links}>
				<UTLink
					to={RoutePath.main}
					className={cls.link}
				>
					<Home className={cls.icon}/>
					<span className={cls.linkTitle}>
						{t('main_nav')}
					</span>
				</UTLink>
				<UTLink
					to={RoutePath.about}
					className={cls.link}
				>
					<Info className={cls.icon}/>
					<span className={cls.linkTitle}>
						{t('about_nav')}
					</span>
				</UTLink>
			</div>
			<UTButton
				data-testid="sidebar-toggle"
				className={cls.collapseBtn}
				onClick={onToggle}
				square
				size={ButtonSize.XL}
				theme={ButtonTheme.BACKGROUND_INVERTED}
			>
				{collapsed ? '>' : '<'}
			</UTButton>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} short={collapsed}/>
			</div>
		</div>
	);
};
