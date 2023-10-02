import cls from './SidebarItem.module.scss';
import { memo } from 'react';
import { classNames } from 'shared/lib';
import { UTLink } from 'shared/ui';
import { SidebarItemInterface } from 'widgets/Sidebar/model/items';

interface SidebarItemProps extends SidebarItemInterface {
    collapsed: boolean;
}

export const SidebarItem= memo(({ Icon, path, text, collapsed }: SidebarItemProps) => {
    
	return (
		<UTLink
			to={path}
			className={classNames(cls.link, { [cls.collapsed]: collapsed }) }
		>
			{Icon && <Icon className={cls.icon}/>}
			<span className={cls.linkTitle}>
				{text}
			</span>
		</UTLink>
	);
});
