import { ButtonSize, ButtonTheme, UTButton } from 'shared/ui/UTButton/UTButton';
import { LangSwitcher, ThemeSwitcher } from 'widgets';
import { classNames } from 'shared/lib';
import { memo, useState } from 'react';
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}
export const Sidebar = memo(({ className }: SidebarProps) => {
	const [ collapsed, setCollapsed ] = useState(false);

	const onToggle = async () => {
		setCollapsed(prev => !prev);
	};
	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<div className={cls.links}>
				{SidebarItemsList.map(({ Icon, path, text }) => {
					return (
						<SidebarItem
							key={path}
							Icon={Icon} 
							path={path} 
							text={text} 
							collapsed={collapsed}
						/>
					);
				})}
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
});
