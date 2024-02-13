import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { UTText } from 'shared/ui/Text/UTText';
import { UTButton } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/UTButton/UTButton';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions } from 'entities/Profile';
import { useApppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData';

interface ProfilePageHeaderProps {
    className?: string;
}
export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
	const { t } = useTranslation('profile');
	const dispatch = useApppDispatch();

	const readonly = useSelector(getProfileReadonly);
	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(!readonly));
	}, [dispatch, readonly]);

	const onSave = useCallback(() => {
		dispatch(updateProfileData());
		dispatch(profileActions.setReadonly(!readonly));
	}, [dispatch, readonly]);

	const onCancel = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	return (
		<div className={classNames(cls.ProfilePageHeader, {}, [className])} >
			<UTText title={t('profile')}/>
			{readonly ? (
				<UTButton className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
					{t('update')}
				</UTButton>
			) : (
				<div className={cls.groupBtn}>
					<UTButton className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onSave}>
						{t('save')}
					</UTButton>
					<UTButton className={cls.editBtn} theme={ButtonTheme.ERROR} onClick={onCancel}>
						{t('cancel')}
					</UTButton>
				</div>
			)
			}
		</div>
	);
};
