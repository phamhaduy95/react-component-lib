import { Combobox, useComboboxContext, UseComboboxContext } from '@ark-ui/react';
import { SelectItem } from '@components/Select/BaseSelect';
import { Tag } from '@components/Tag/Tag';
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

	return (
		<BaseCombobox
			{...rest}
			value={value}
			onValueChange={handleValueChange}
			multiple
			CustomValueText={<MultipleComboboxDisplayValue />}
		/>
	);
};

export default MultipleCombobox;

const MultipleComboboxDisplayValue = () => {
	const {
		selectedItems = [],
		getRootProps,
		clearValue,
		focus
	}: UseComboboxContext<SelectItem> = useComboboxContext();
	const { placeholder }: MultipleComboboxProps = getRootProps();

	const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const { key } = e;
		const target = e.target as HTMLInputElement;

		if (!target.value && key === 'Backspace') {
			const lastSelectedItem = selectedItems[selectedItems.length - 1];
			clearValue(lastSelectedItem.value);
		}
	};

	return (
		<div className="Combobox_DisplayArea">
			{selectedItems.map((item) => (
				<Tag
					label={item.label}
					key={item.value}
					removable
					onRemoveClick={() => {
						clearValue(item.value);
						focus();
					}}
				/>
			))}
			<Combobox.Input
				placeholder={placeholder}
				className="Combobox_Input"
				onKeyDown={handleKeydown}
			/>
		</div>
	);
};
