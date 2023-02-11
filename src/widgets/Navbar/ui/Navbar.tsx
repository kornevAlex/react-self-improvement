import { classNames } from 'shared/lib/classNames';
import cls from './Navbar.module.sass';
import { UTLink } from 'shared/ui/UTLink/UTLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}
export const Navbar = ({className}: NavbarProps) => {
	const { t } = useTranslation()
   return (
       <div
            className={classNames(cls.navbar, {}, [className])}
        >
            <div className={cls.links}>
                <UTLink to={'/'}>{t('main_nav')}</UTLink>
                <UTLink to={'/about'}>{t('about_nav')}</UTLink>
            </div>
       </div>
   )
}