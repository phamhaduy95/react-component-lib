import { SelectItem } from '@components/Select/BaseSelect';
import { BaseCombobox, BaseComboboxProps } from './BaseComboBox';

export type SingleComboboxProps = Omit<
	BaseComboboxProps,
	'value' | 'onValueChange' | 'multiple'
> & {
	value?: string;
	onValueChange?: (value: string, item?: SelectItem) => void;
};

const SingleCombobox = ({ value, onValueChange, ...rest }: SingleComboboxProps) => {
	const internalValue = value ? [value] : undefined;

	const handleValueChange: BaseComboboxProps['onValueChange'] = (data) => {
		if (onValueChange) onValueChange(data.value[0], data.items[0]);
	};

	return <BaseCombobox value={internalValue} onValueChange={handleValueChange} {...rest} />;
};

export default SingleCombobox;
