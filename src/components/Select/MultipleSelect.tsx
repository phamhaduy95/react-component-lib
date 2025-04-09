import { useSelectContext, UseSelectContext } from '@ark-ui/react/select';
import { Tag } from '@components/Tag/Tag';
import BaseSelect, { BaseSelectProps, SelectItem } from './BaseSelect';

export type MultipleSelectProps = Omit<BaseSelectProps, 'value' | 'onValueChange'> & {
	value?: string[];
	onValueChange?: (value: string[], item: SelectItem[]) => void;
};
const MultipleSelect = ({ value, onValueChange, ...rest }: MultipleSelectProps) => {
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

type DisplayedSelectValueProps = {
	placeholder?: string;
	className?: string;
};

const DisplayedSelectValue = ({ placeholder }: DisplayedSelectValueProps) => {
	const { selectedItems = [], clearValue }: UseSelectContext<SelectItem> = useSelectContext();

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
					}}
				/>
			))}
		</div>
	);
};

export default MultipleSelect;
