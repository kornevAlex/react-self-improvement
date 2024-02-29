import { classNames } from 'shared/lib/classNames/classNames';
import cls from './UTSelect.module.scss';
import { ChangeEvent, FC, SelectHTMLAttributes, useMemo } from 'react';

export interface SelectOption {
	value: string;
	content: string;
}


interface UTSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	className?: string;
	label?: string;
	readonly?: boolean;
	options?: SelectOption[];
}
export const UTSelect: FC<UTSelectProps> = ({ className, label, options, value, readonly, onChange }) => {

	const optionsList = useMemo(() => {
		return options?.map((opt, i) => (
			<option 
				key={i}
				className={cls.option}
				value={opt.value}
			>
				{opt.content}
			</option>
		));
	}, [options]);

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e);
	};

	return (
		<div data-testid="select" className={classNames(cls.Wrapper, {}, [className])} >
			{label && 
			<span className={cls.label}>
				{label}
			</span>
			}
			<select
				disabled={readonly}
				className={cls.Select} 
				value={value}
				onChange={onChangeHandler}
			>
				{optionsList}
			</select>
		</div>
	);
};
