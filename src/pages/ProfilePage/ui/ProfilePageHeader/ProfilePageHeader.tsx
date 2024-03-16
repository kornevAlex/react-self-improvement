import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { UTText } from 'shared/ui/Text/UTText';
import { UTButton } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/UTButton/UTButton';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData';
import { getUserAuthData } from 'entities/User';
import { useActionCreators } from 'shared/lib';

interface ProfilePageHeaderProps {
    className?: string;
}
export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const profileData = useSelector(getProfileData);
  const authData = useSelector(getUserAuthData);
  const { setReadonly, cancelEdit } = useActionCreators(profileActions);

  const isOwner = profileData?.id === authData?.id;
  console.log(profileData?.id, authData?.id);
	
  const readonly = useSelector(getProfileReadonly);
  const onEdit = useCallback(() => {
    setReadonly(!readonly);
  }, [readonly, setReadonly]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const onCancel = useCallback(() => {
    cancelEdit();
  }, [cancelEdit]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])} >
      <UTText title={t('profile')}/>
      {isOwner && (readonly ? (
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
      ))
      }
    </div>
  );
};
