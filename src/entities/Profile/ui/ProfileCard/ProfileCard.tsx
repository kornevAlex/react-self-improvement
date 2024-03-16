import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TextAlign, TextTheme, UTText } from 'shared/ui/Text/UTText';
import { Loader } from 'shared/ui';
import { InputMod, UTInput } from 'shared/ui/UTInput/UTInput';
import { Profile } from '../..//model/types/profile';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
    className?: string;
	profile?: Profile;
	error?: string;
	isLoading?: boolean;
	readonly?: boolean;
	onChangeFirstname?: (value?: string) => void;
	onChangeLastname?: (value?: string) => void;
	onChangeAge?: (value?: string) => void;
	onChangeCity?: (value?: string) => void;
	onChangeAvatar?: (value?: string) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeCurrency?: (value?: Currency) => void;
	onChangeCountry?: (value?: Country) => void;
}
export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { t } = useTranslation('profile');

  const {
    className,
    profile,
    error,
    isLoading,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
    readonly,
  } = props;

  if (isLoading){
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loader])} >
        <Loader  />
      </div>
    );
  }

  if (error){
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])} >
        <UTText theme={TextTheme.ERROR} title='Произошла непредвиденная ошибка' text={error} align={TextAlign.CENTER}/>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, { [cls.editing]: !readonly }, [className])} >
      <div className={cls.data}>
        {profile?.avatar && <div className={cls.avatarWrapper}>
          <Avatar src={profile?.avatar}/>
        </div>}
        <div className={cls.dataWrapper}>
          <UTInput
            value={profile?.firstname}
            placeholder={t('your_firstname')}
            className={cls.input}
            readonly={readonly}
            onChange={onChangeFirstname}
          />
          <UTInput
            value={profile?.lastname} 
            placeholder={t('your_lastname')} 
            className={cls.input} 
            readonly={readonly}
            onChange={onChangeLastname}
          />
          <UTInput
            value={profile?.age} 
            placeholder={t('your_age')} 
            className={cls.input} 
            readonly={readonly}
            mod={InputMod.NUM}
            onChange={onChangeAge}
          />
          <UTInput
            value={profile?.city} 
            placeholder={t('your_city')} 
            className={cls.input} 
            readonly={readonly}
            onChange={onChangeCity}
          />
          <UTInput
            value={profile?.username} 
            placeholder={t('your_login')} 
            className={cls.input} 
            readonly={readonly}
            onChange={onChangeUsername}
          />
          <UTInput
            value={profile?.avatar} 
            placeholder={t('your_avatar')} 
            className={cls.input} 
            readonly={readonly}
            onChange={onChangeAvatar}
          />
          <CurrencySelect
            value={profile?.currency}
            readonly={readonly}
            onChange={onChangeCurrency}
          />
          <CountrySelect
            value={profile?.country}
            readonly={readonly}
            onChange={onChangeCountry}
          />
        </div>
      </div>
    </div>
  );
};
