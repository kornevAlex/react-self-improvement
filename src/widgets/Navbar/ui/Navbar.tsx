import { useState, useCallback, memo } from 'react';
import { classNames, useActionCreators } from 'shared/lib';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { ButtonTheme, UTButton } from 'shared/ui/UTButton/UTButton';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
    className?: string;
}
export const Navbar = memo(({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const actions = useActionCreators(userActions);
	
  const  { t }= useTranslation();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    actions.logout();
  }, [actions]);

  if (authData){
    return (
      <div
        className={classNames(cls.navbar, {}, [className])}
      >
        <UTButton
          className={cls.auth}
          theme={ButtonTheme.BACKGROUND}
          onClick={onLogout}
        >
          {t('sign_out')}
        </UTButton>
      </div>
    );
  }
  return (
    <div
      className={classNames(cls.navbar, {}, [className])}
    >
      <UTButton
        className={cls.auth}
        theme={ButtonTheme.BACKGROUND}
        onClick={onShowModal}
      >
        {t('sign_in')}
      </UTButton>
      <LoginModal isOpen={isAuthModal}  onClose={onCloseModal}/>
    </div>
  );
});
