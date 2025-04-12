import { SelectItem } from '@components/Select/BaseSelect';
import { BaseCombobox, BaseComboboxProps } from './BaseComboBox';

export type MultipleComboboxProps = Omit<
	BaseComboboxProps,
	'value' | 'onValueChange' | 'multiple'
> & {
	value?: string[];
	onValueChange?: (value: string[], item?: SelectItem[]) => void;
};

const MultipleCombobox = ({ value, onValueChange, ...rest }: MultipleComboboxProps) => {
	const handleValueChange: BaseComboboxProps['onValueChange'] = (data) => {
		if (onValueChange) onValueChange(data.value, data.items);
	};

	return <BaseCombobox {...rest} value={value} onValueChange={handleValueChange} multiple />;
};

export default MultipleCombobox;
