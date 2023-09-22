import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

interface CounterProps {
    className?: string;
}
export const User = ({ className }: CounterProps) => {
	const { t, i18n } = useTranslation();

	return (
		<div>
		</div>
	);
};
