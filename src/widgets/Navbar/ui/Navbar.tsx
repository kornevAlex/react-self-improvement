import { useState, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { ButtonTheme, UTButton } from 'shared/ui/UTButton/UTButton';
import { LoginModal } from 'features/AuthByUsername/indes';

interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false);
	const  { t }= useTranslation();

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);
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
