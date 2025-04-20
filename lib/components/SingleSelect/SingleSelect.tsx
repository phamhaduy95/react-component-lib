import { useMemo } from 'react';
import BaseSelect, { BaseSelectProps, SelectItem } from '../BaseSelect/BaseSelect';

export interface SingleSelectProps extends Omit<BaseSelectProps, 'value' | 'onValueChange'> {
	value?: string;
	onValueChange?: (value: string, item: SelectItem) => void;
}

const SingleSelect = (props: SingleSelectProps) => {
	const { value, onValueChange, ...rest } = props;
	const mappedValue = useMemo(() => {
		return value ? [value] : undefined;
	}, [value]);

	return (
		<BaseSelect
			value={mappedValue}
			onValueChange={(selectedValue) => {
				if (onValueChange) onValueChange(selectedValue.value[0], selectedValue.items[0]);
			}}
			{...rest}
		/>
	);
};

export default SingleSelect;
