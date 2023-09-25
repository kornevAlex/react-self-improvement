import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { UTButton } from 'shared/ui';
import { UTInput } from 'shared/ui/UTInput/UTInput';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/AuthByUsername/authByUsername';
import { getAuth } from 'features/AuthByUsername/model/selectors/getAuth/getAuth';
import { TextTheme, UTText } from 'shared/ui/Text/UTButton/UTText';

interface LoginFormProps {
    className?: string;
}
export const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { isLoading, password, username, error } = useSelector(getAuth);

	const onChangeLogin = useCallback((val) => {
		dispatch(authActions.setUsername(val));
	}, [dispatch]);

	const onChangePassword = useCallback((val) => {
		dispatch(authActions.setPassword(val));
	}, [dispatch]);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, username, password]);
	
	return (
		<div className={classNames(cls.LoginForm, {}, [className])} >
			<UTText title={t('authorisation_form')}/>
			{error && <UTText text={error} theme={TextTheme.ERROR}/>}
			<UTInput type="text" placeholder={t('login')} autoFocus onChange={onChangeLogin} value={username}/>
			<UTInput type="text" placeholder={t('password')} onChange={onChangePassword} value={password}/>
			<UTButton className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
				{t('sign_in')}
			</UTButton>
		</div>
	);
});
