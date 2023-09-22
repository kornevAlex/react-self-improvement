import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';
import { Modal } from 'shared/ui';

interface LoginModalProps {
    className?: string;
	isOpen: boolean;
	onClose: () => void;
}
export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {

	return (
		<Modal
			className={classNames(cls.LangSwitcher, {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
			confirm
		>
			<LoginForm />
		</Modal>
	);
};
