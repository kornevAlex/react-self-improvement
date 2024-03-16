import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import cls from './NotFoundPage.module.scss';
import { memo } from 'react';

interface NotFoundPageProps {
    className?: string;
}
export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
  const { t } = useTranslation('');
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('not_found')}
    </div>
  );
});
