import FormLabel from '@components/FormLabel/FormLabel';
import SupportingText from '@components/SupportingText/SupportingText';
import { FormStatus } from '@components/type';
import classNames from 'classnames';
import { FormEvent, HTMLAttributes, useId } from 'react';
import './TextInput.css';

export type TextInputProp = HTMLAttributes<HTMLInputElement> & {
	value?: string;
	onValueChange?: (value: string) => void;
	labelText?: string;
	status?: FormStatus;
	supportingText?: string;
	clearable?: boolean;
	disabled?: boolean;
	className?: string;
	required?: boolean;
	name?: string;
};

const TextInput = ({
	labelText,
	value,
	className,
	status,
	required,
	clearable,
	disabled,
	supportingText,
	onChange,
	onValueChange,
	...rest
}: TextInputProp) => {
	const inputId = useId();
	const supportingTextId = useId();

	const handleInputChanged = (e: FormEvent<HTMLInputElement>) => {
		if (onChange) onChange(e);
		const value = (e.target as HTMLInputElement).value;
		if (onValueChange) onValueChange(value);
	};

	return (
		<div className={classNames('TextInput', className)}>
			<FormLabel
				className="TextInputLabel"
				htmlFor={inputId}
				status={status}
				required={required}
			>
				{labelText}
			</FormLabel>
			<div className="TextInput_InputField" data-status={status} data-clearable={clearable}>
				<input
					className="TextInput_Input"
					id={inputId}
					aria-disabled={disabled}
					aria-describedby={supportingTextId}
					aria-invalid={status === 'error'}
					value={value}
					onChange={handleInputChanged}
					{...rest}
				/>
			</div>
			<SupportingText
				className="TextInput_SupportingText"
				id={supportingTextId}
				status={status}
			>
				{supportingText}
			</SupportingText>
		</div>
	);
};

export default TextInput;
