import { useState, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { ButtonTheme, UTButton } from 'shared/ui/UTButton/UTButton';

interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false);
	const  { t }= useTranslation();

	const onToggleButton = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);
	return (
		<div
			className={classNames(cls.navbar, {}, [className])}
		>
			<UTButton
				className={cls.auth}
				theme={ButtonTheme.BACKGROUND}
				onClick={onToggleButton}
			>
				{t('header.navbar.button.auth')}
			</UTButton>
			<Modal isOpen={isAuthModal} onClose={onToggleButton}/>
		</div>
	);
};
