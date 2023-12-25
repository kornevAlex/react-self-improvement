import { classNames } from 'shared/lib';
import cls from './UTInput.module.scss';
import { InputHTMLAttributes, memo, useCallback, useEffect, useRef, useState } from 'react';
import { Mods } from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'readonly'>

interface UTInputProps extends HTMLInputProps{
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
	readonly?: boolean;
}
export const UTInput = memo((props: UTInputProps) => {
	const [isFocused, setIsFocused] = useState(false);
	const [caretPosition, setCaretPosition] = useState(0);

	const {
		className,
		value,
		onChange,
		type = 'text',
		placeholder,
		autoFocus,
		readonly = false
	} = props;

	const ref = useRef<HTMLInputElement| null>(null);
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!readonly){
			onChange?.(e.target.value);
			setCaretPosition(e.target.value.length);
		}
	};

	const onBlur = useCallback(() => {
		setIsFocused(false);
	}, []);

	const onFocus = useCallback(() => {
		setIsFocused(true);
	}, []);

	const onSelect = useCallback((e) => {
		setCaretPosition(e?.target?.selectionStart);
	}, []);

	useEffect(() => {
		if(autoFocus){
			setIsFocused(true);
			ref.current?.focus();
		}
	}, [autoFocus]);

	const mods: Mods = {
		[cls.readonly]: readonly,
	}; 

	return (
		<div data-testid="input" className={classNames(cls.InputWrapper, mods, [className])} >
			{placeholder && <div className={cls.placeholder}>
				{placeholder + '>'}
			</div>}
			<div className={cls.caretWrapper}>
				<input
					ref={ref}
					value={value}
					className={cls.input}
					type={type}
					readOnly={readonly}
					onChange={onChangeHandler}
					onBlur={onBlur}
					onFocus={onFocus}
					onSelect={onSelect}
				/>
				{isFocused && <span className={cls.caret} style={{ left: `${caretPosition * 8.8}px` }}/>}
			</div>
		</div>
	);
});
