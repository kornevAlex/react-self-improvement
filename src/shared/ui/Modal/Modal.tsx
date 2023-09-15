import { classNames } from 'shared/lib';
import cls from './Modal.module.scss';
import { ReactElement, useCallback, useEffect } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';

interface ModalProps {
    className?: string;
    children?: ReactElement;
		isOpen?: boolean;
		onClose?: () => void;
}
export const Modal = (props: ModalProps) => {
	const {
		className,
		children,
		isOpen,
		onClose,
	} = props;

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
	};

	const closeHandler = useCallback(() => {
		onClose();
	}, [onClose]);


	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape' && isOpen){
			closeHandler();
		}
	}, [closeHandler, isOpen]);
	useEffect(() => {
		window.addEventListener('keydown', onKeyDown);

		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);


	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div className={cls.content} onClick={(e) => e.stopPropagation()}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
