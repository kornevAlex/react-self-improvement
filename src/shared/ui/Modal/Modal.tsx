import { classNames } from 'shared/lib';
import cls from './Modal.module.scss';
import { ReactElement, useCallback, useEffect } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { ButtonSize, ButtonTheme, UTButton } from '../UTButton/UTButton';

interface ModalProps {
    className?: string;
    children?: ReactElement;
	portalTarget?: HTMLElement;
	isOpen?: boolean;
	confirm?: boolean;
	onClose?: () => void;
}
export const Modal = (props: ModalProps) => {
	const {
		className,
		children,
		isOpen,
		onClose,
		portalTarget,
		confirm,
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

	const onOverlayClick = useCallback(() => {
		if (!confirm && isOpen) closeHandler();
	}, [closeHandler, isOpen, confirm]);
	useEffect(() => {
		window.addEventListener('keydown', onKeyDown);

		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);


	return (
		<Portal element={portalTarget}>
			{isOpen && <div className={classNames(cls.Modal, mods, [className])}>
				<div className={cls.overlay} onClick={onOverlayClick}>
					<div className={cls.content} onClick={(e) => e.stopPropagation()}>
						{children}
						{ confirm && <UTButton className={cls.closeButton} onClick={closeHandler} square theme={ButtonTheme.CLEAR} size={ButtonSize.L}>X</UTButton>}
					</div>
				</div>
			</div>}
		</Portal>
	);
};
