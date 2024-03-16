import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { UTSelect } from 'shared/ui/UTSelect/UTSelect';
import { Currency } from '../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
	readonly?: boolean;
    onChange?: (value: Currency) => void;
}

export const CurrencySelect: FC<CurrencySelectProps> = memo(({ value, readonly, onChange }: CurrencySelectProps) => {
  const { t } = useTranslation();
  const countryOptions = useMemo(() => Object.entries(Currency).map((val) => ({ value: val[0], content: val[1] })), []);

  const onChangeHandler = useCallback((event) => {
    onChange?.(event.target.value);
  }, [onChange]);

  return (
    <UTSelect
      label={t('choose_money_type')}
      options={countryOptions}
      value={value}
      readonly={readonly}
      onChange={onChangeHandler}>
            
    </UTSelect>
  );
});
