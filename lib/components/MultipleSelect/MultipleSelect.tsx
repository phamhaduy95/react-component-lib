import { useSelectContext, UseSelectContext } from '@ark-ui/react/select';
import Tag from '@components/Tag';
import { JSX } from 'react';
import BaseSelect, { BaseSelectProps, SelectItem } from '../BaseSelect/BaseSelect';

export interface MultipleSelectProps extends Omit<BaseSelectProps, 'value' | 'onValueChange'> {
	value?: string[];
	onValueChange?: (value: string[], item: SelectItem[]) => void;
}

const MultipleSelect = (props: MultipleSelectProps): JSX.Element => {
	const { value, onValueChange, ...rest } = props;

	return (
		<BaseSelect
			multiple
			value={value}
			onValueChange={(selectedValue) => {
				if (onValueChange) onValueChange(selectedValue.value, selectedValue.items);
			}}
			CustomValueText={<DisplayedSelectValue />}
			{...rest}
		/>
	);
};

export default MultipleSelect;

type DisplayedSelectValueProps = {
	placeholder?: string;
	className?: string;
};

const DisplayedSelectValue = ({ placeholder }: DisplayedSelectValueProps) => {
	const {
		selectedItems = [],
		clearValue,
		focus
	}: UseSelectContext<SelectItem> = useSelectContext();

	if (selectedItems.length === 0) return <span className="Select_Value">{placeholder}</span>;
	return (
		<div className="flex flex-wrap gap-2">
			{selectedItems.map((item) => (
				<Tag
					label={item.label}
					removable
					onRemoveClick={(e) => {
						e.stopPropagation();
						clearValue(item.value);
						focus();
					}}
				/>
			))}
		</div>
	);
};
