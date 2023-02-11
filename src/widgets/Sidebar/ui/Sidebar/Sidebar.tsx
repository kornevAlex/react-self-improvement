import { classNames } from 'shared/lib/classNames';
import cls from './Sidebar.module.sass';
import { useState } from 'react';
import { UTButton } from 'shared/ui/UTButton/UTButton';
import { ThemeSwitcher } from 'shared/ui';

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({className}: SidebarProps) => {
    const [ collapsed, setCollapsed ] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }
   return (
       <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <UTButton onClick={onToggle}>
                Click ME!!!
            </UTButton>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
       </div>
   )
}