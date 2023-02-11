import { classNames } from 'shared/lib/classNames';
import cls from './Navbar.module.sass';
import { UTLink } from 'shared/ui/UTLink/UTLink';
import { ThemeSwitcher } from 'shared/ui';

interface NavbarProps {
    className?: string;
}
export const Navbar = ({className}: NavbarProps) => {
   return (
       <div
            className={classNames(cls.navbar, {}, [className])}
        >
            <ThemeSwitcher />
            <div className={cls.links}>
                <UTLink to={'/'}>Главная</UTLink>
                <UTLink to={'/about'}>О нас</UTLink>
            </div>
       </div>
   )
}