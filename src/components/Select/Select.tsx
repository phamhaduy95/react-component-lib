import { Select as RadixSelect } from 'radix-ui';

import SelectGroup from './SelectGroup';
import SelectItem from './SelectItem';

import { Ref } from 'react';
import './Select.css';

type SelectItem = { value: string; label: string; disabled?: boolean };

export type GroupItem = { label: string; items: SelectItem[] };

export type SelectProps = RadixSelect.SelectProps & {
	className?: string;
	disabled?: boolean;
	items?: Array<SelectItem | { group: GroupItem }>;
	label?: string;
	placeholder?: string;
	supportingText?: string;
	preventScroll?: boolean;
	ref?: Ref<HTMLButtonElement>;
};

const Select = ({ value, onValueChange, items, ref }: SelectProps) => {
	return (
		<RadixSelect.Root value={value} onValueChange={onValueChange}>
			<RadixSelect.Trigger className="SelectTrigger" ref={ref}></RadixSelect.Trigger>
			<RadixSelect.Portal>
				<RadixSelect.Content className="SelectContent">
					<RadixSelect.Viewport className="SelectViewport">
						{renderSelectItems(items)}
					</RadixSelect.Viewport>
				</RadixSelect.Content>
			</RadixSelect.Portal>
		</RadixSelect.Root>
	);
};

export default Select;

const renderSelectItems = (items: SelectProps['items'] = []) => {
	return items.map((item) => {
		if (isGroupItem(item)) {
			const { group } = item;
			return <SelectGroup group={group} />;
		}
		return <SelectItem {...item} />;
	});
};

const isGroupItem = (item: SelectItem | { group: GroupItem }): item is { group: GroupItem } => {
	return 'group' in item;
};
