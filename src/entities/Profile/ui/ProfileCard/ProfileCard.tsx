import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TextAlign, TextTheme, UTText } from 'shared/ui/Text/UTText';
import { Loader } from 'shared/ui';
import { UTInput } from 'shared/ui/UTInput/UTInput';
import { ProfileInt } from '../..//model/types/profile';

interface ProfileCardProps {
    className?: string;
	profile?: ProfileInt;
	error?: string;
	isLoading?: boolean;
	readonly?: boolean;
	onChangeFirstname: (value?: string) => void;
	onChangeLastname: (value?: string) => void;
}
export const ProfileCard: FC<ProfileCardProps> = ({ className, profile, error, isLoading, onChangeFirstname, onChangeLastname, readonly }) => {
	const { t } = useTranslation('profile');

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
		<div className={classNames(cls.ProfileCard, {}, [className])} >
			<div className={cls.data}>
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
			</div>
		</div>
	);
};
