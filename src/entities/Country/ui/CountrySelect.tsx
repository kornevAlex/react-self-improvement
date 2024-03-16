import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { UTSelect } from 'shared/ui/UTSelect/UTSelect';
import { Country } from '../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
	readonly?: boolean;
    onChange?: (value: Country) => void;
}

export const CountrySelect: FC<CountrySelectProps> = memo(({ value, readonly, onChange }: CountrySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((event) => {
    onChange?.(event.target.value);
  }, [onChange]);

  const countryOptions = useMemo(() => Object.entries(Country).map((val) => ({ value: val[0], content: val[1] })), []);
  return (
    <UTSelect
      label={t('choose_country_type')}
      options={countryOptions}
      readonly={readonly}
      value={value}
      onChange={onChangeHandler}>
            
    </UTSelect>
  );
});
