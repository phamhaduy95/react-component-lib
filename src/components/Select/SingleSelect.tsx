import { useMemo } from 'react';
import BaseSelect, { BaseSelectProps, SelectItem } from './BaseSelect';

export type SingleSelectProps = Omit<BaseSelectProps, 'value' | 'onValueChange'> & {
	value?: string;
	onValueChange?: (value: string, item: SelectItem) => void;
};

const SingleSelect = ({ value, onValueChange, ...rest }: SingleSelectProps) => {
	const mappedValue = useMemo(() => {
		return value ? [value] : undefined;
	}, [value]);

	return (
		<BaseSelect
			data-mode="multiple"
			value={mappedValue}
			onValueChange={(selectedValue) => {
				if (onValueChange) onValueChange(selectedValue.value[0], selectedValue.items[0]);
			}}
			{...rest}
		/>
	);
};

export default SingleSelect;
