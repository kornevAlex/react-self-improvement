import { useState, useCallback } from 'react';
import { classNames } from 'shared/lib';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { ButtonTheme, UTButton } from 'shared/ui/UTButton/UTButton';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);
	const dispatch = useDispatch();
	
	const  { t }= useTranslation();

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

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
};
