import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { UTText } from 'shared/ui/Text/UTText';
import { UTButton } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/UTButton/UTButton';
import { UTInput } from 'shared/ui/UTInput/UTInput';

interface ProfileCardProps {
    className?: string;
}
export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
	const { t } = useTranslation('profile');
	const data = useSelector(getProfileData);


	return (
		<div className={classNames(cls.LangSwitcher, {}, [className])} >
			<div className={cls.header}>
				<UTText title={t('profile')}/>
				<UTButton className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
					{t('update')}
				</UTButton>
			</div>
			<div className={cls.data}>
				<UTInput value={data?.firstname} placeholder={t<string>('your_firstname')} className={cls.input}/>
				<UTInput value={data?.lastname} placeholder={t<string>('your_lastname')} className={cls.input}/>
				<UTInput value={data?.city} placeholder={t<string>('your_city')} className={cls.input}/>
			</div>
		</div>
	);
};
