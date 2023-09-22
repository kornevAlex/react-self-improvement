import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { UTButton } from 'shared/ui';
import { UTInput } from 'shared/ui/UTInput/UTInput';

interface LoginFormProps {
    className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.LoginForm, {}, [className])} >
			<UTInput type="text" placeholder={t('login')} autoFocus/>
			<UTInput type="text" placeholder={t('password')} />
			<UTButton className={cls.loginBtn}>
				{t('sign_in')}
			</UTButton>
		</div>
	);
};
