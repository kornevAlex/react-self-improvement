import cls from './SidebarItem.module.scss';
import { memo } from 'react';
import { classNames } from 'shared/lib';
import { UTLink } from 'shared/ui';
import { SidebarItemInterface } from 'widgets/Sidebar/model/types/sidebar';

interface SidebarItemProps extends SidebarItemInterface {
    collapsed: boolean;
}

export const SidebarItem= memo(({ Icon, path, textKey, collapsed }: SidebarItemProps) => {
    
  return (
    <UTLink
      to={path}
      className={classNames(cls.link, { [cls.collapsed]: collapsed }) }
    >
      {Icon && <Icon className={cls.icon}/>}
      <span className={cls.linkTitle}>
        {textKey}
      </span>
    </UTLink>
  );
});
