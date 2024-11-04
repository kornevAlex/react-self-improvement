import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface CardProps {
  className?: string;
}
export const Card: FC<CardProps> = ({ className, children }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={classNames(cls.Card, {}, [className])} >
      {children}
    </div>
  );
};
