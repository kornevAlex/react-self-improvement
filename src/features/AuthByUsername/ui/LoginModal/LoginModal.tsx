import { Suspense } from 'react';
import { Loader, Modal } from 'shared/ui';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

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
			<Suspense fallback={<Loader />}>
				<LoginFormAsync onSuccess={onClose}/>
			</Suspense>
		</Modal>
	);
};
