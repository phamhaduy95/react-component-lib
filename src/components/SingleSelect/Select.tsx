import { Portal } from '@ark-ui/react/portal';
import { Select, createListCollection } from '@ark-ui/react/select';
import SupportingText from '@components/SupportingText';
import { FormStatus } from '@components/type';
import { CheckIcon, ChevronDownIcon, Cross2Icon } from '@radix-ui/react-icons';
import { HTMLAttributes, Ref } from 'react';

import '../Menu/Menu.css';
import './Select.css';

type SelectItem = { value: string; label: string; disabled?: boolean };

export type SelectProps = HTMLAttributes<HTMLButtonElement> & {
	className?: string;
	disabled?: boolean;
	items?: Array<SelectItem>;
	label?: string;
	placeholder?: string;
	supportingText?: string;
	ref?: Ref<HTMLButtonElement>;
	status?: FormStatus;
	required?: boolean;
	deselectable?: boolean;
	loopFocus?: boolean;
	clearable?: boolean;
};

const SelectV2 = ({
	items = [],
	status,
	label,
	ref,
	placeholder,
	disabled,
	deselectable,
	supportingText,
	loopFocus,
	clearable
}: SelectProps) => {
	const collection = createListCollection({ items });
	return (
		<Select.Root
			className="Select_Root"
			collection={collection}
			disabled={disabled}
			deselectable={deselectable}
			loopFocus={loopFocus}
		>
			<Select.Label className="FormLabel" data-status={status}>
				{label}
			</Select.Label>
			<Select.Control asChild>
				<>
					<Select.Trigger ref={ref} className="Select_Field" data-status={status}>
						<Select.ValueText className="Select_Value" placeholder={placeholder} />
						<div className="Select_TrailingIcon">
							<ChevronDownIcon className="Select_ToggleIcon" width={20} height={20} />
							{clearable ? (
								<Select.ClearTrigger className="Select_ClearButton">
									<Cross2Icon width={20} height={20} />
								</Select.ClearTrigger>
							) : null}
						</div>
					</Select.Trigger>
				</>
			</Select.Control>
			<SupportingText status={status}>{supportingText}</SupportingText>
			<Portal>
				<Select.Positioner className="Positioner">
					<Select.Content className="Menu SelectContent" asChild>
						<ul>
							{collection.items.map((item) => (
								<Select.Item
									className="Menu_Item SelectItem"
									key={item.value}
									item={item}
									asChild
								>
									<li>
										<Select.ItemText>{item.label}</Select.ItemText>
										<Select.ItemIndicator className="MenuItem_TrailingIcon">
											<CheckIcon height={16} width={16} />
										</Select.ItemIndicator>
									</li>
								</Select.Item>
							))}
						</ul>
					</Select.Content>
				</Select.Positioner>
			</Portal>
			<Select.HiddenSelect />
		</Select.Root>
	);
};

export default SelectV2;
