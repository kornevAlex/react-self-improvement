import { LoginForm } from '../LoginForm/LoginForm';
import { Modal } from 'shared/ui';

interface LoginModalProps {
    className?: string;
	isOpen: boolean;
	onClose: () => void;
}
export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			confirm
		>
			<LoginForm />
		</Modal>
	);
};
