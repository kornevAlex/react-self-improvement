import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { ReducersList, classNames } from 'shared/lib';
import { UTButton } from 'shared/ui';
import { UTInput } from 'shared/ui/UTInput/UTInput';
import { useSelector } from 'react-redux';
import { authActions, authReducer } from '../../model/slice/loginSlice';
import { authByUsername } from '../../model/services/AuthByUsername/authByUsername';
import { TextTheme, UTText } from 'shared/ui/Text/UTText';
import { getAuthUsername } from '../../../AuthByUsername/model/selectors/getAuthUsername/getAuthUsername';
import { getAuthPassword } from '../../../AuthByUsername/model/selectors/getAuthPassword/getAuthPassword';
import { getAuthError } from '../../../AuthByUsername/model/selectors/getAuthError/getAuthError';
import { getAuthisLoading } from '../../../AuthByUsername/model/selectors/getAuthisLoading/getAuthisLoading';
import { DynamicModuleLoader } from 'shared/lib';
import { useApppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface LoginFormProps {
    className?: string;
	onSuccess: () => void;
}
const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useApppDispatch();
	const username = useSelector(getAuthUsername);
	const password = useSelector(getAuthPassword);
	const isLoading = useSelector(getAuthisLoading);
	const error = useSelector(getAuthError);
	const reducers: ReducersList = {
		auth: authReducer,
	};

	const onChangeLogin = useCallback((val) => {
		dispatch(authActions.setUsername(val));
	}, [dispatch]);
	
	const onChangePassword = useCallback((val) => {
		dispatch(authActions.setPassword(val));
	}, [dispatch]);

	const onLoginClick = useCallback(async () => {
		const { meta } = await dispatch(authByUsername({ username, password }));

		if (meta.requestStatus === 'fulfilled'){
			onSuccess();
		}
		

	}, [dispatch, username, password, onSuccess]);
	'';
	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames(cls.LoginForm, {}, [className])} >
				<UTText title={t('authorisation_form')}/>
				{error && <UTText text={error} theme={TextTheme.ERROR}/>}
				<UTInput type="text" placeholder={t<string>('login')} autoFocus onChange={onChangeLogin} value={username}/>
				<UTInput type="text" placeholder={t<string>('password')} onChange={onChangePassword} value={password}/>
				<UTButton className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
					{t('sign_in')}
				</UTButton>
			</div>
		</DynamicModuleLoader>
	);
});

export default LoginForm;
