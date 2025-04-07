import { Select as RadixSelect } from 'radix-ui';

import SelectGroup from './SelectGroup';
import SelectItem from './SelectItem';

import FormLabel from '@components/FormLabel/FormLabel';
import SupportingText from '@components/SupportingText';
import { FormStatus } from '@components/type';
import { HTMLAttributes, Ref, useId } from 'react';
import '../Menu/Menu.css';
import './Select.css';

type SelectItem = { value: string; label: string; disabled?: boolean };

export type GroupItem = { label: string; items: SelectItem[] };

export type SelectProps = HTMLAttributes<HTMLSelectElement> &
	RadixSelect.SelectProps & {
		className?: string;
		disabled?: boolean;
		items?: Array<SelectItem>;
		label?: string;
		placeholder?: string;
		supportingText?: string;
		preventScroll?: boolean;
		ref?: Ref<HTMLButtonElement>;
		status?: FormStatus;
		required?: boolean;
	};

const Select = ({
	value,
	onValueChange,
	items,
	ref,
	placeholder,
	status,
	disabled,
	label,
	supportingText,
	required
}: SelectProps) => {
	const labelId = useId();
	const supportingId = useId();

	return (
		<RadixSelect.Root
			value={value}
			onValueChange={onValueChange}
			disabled={disabled}
			autoComplete="A"
		>
			<div className="Select">
				<FormLabel type="p" id={labelId} status={status} required={required}>
					{label}
				</FormLabel>
				<RadixSelect.Trigger
					className="Select_Field"
					ref={ref}
					aria-labelledby={label ? labelId : undefined}
					aria-describedby={supportingText ? supportingId : undefined}
				>
					<RadixSelect.Value className="Select_Value" placeholder={placeholder} />
				</RadixSelect.Trigger>
				<SupportingText>{supportingText}</SupportingText>
			</div>
			<RadixSelect.Portal>
				<RadixSelect.Content
					className="Menu SelectContent"
					position="popper"
					sideOffset={2}
				>
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
