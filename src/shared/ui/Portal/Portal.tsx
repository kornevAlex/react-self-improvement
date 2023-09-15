import { ReactElement } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactElement;
    element?: HTMLElement;
}
export const Portal = (props: PortalProps) => {
	const {
		element = document.body,
		children,
	} = props;

	return createPortal(children, element);
};
