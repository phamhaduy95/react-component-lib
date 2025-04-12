import { Portal } from '@ark-ui/react/portal';
import { Select, createListCollection } from '@ark-ui/react/select';
import SupportingText from '@components/SupportingText';
import { FieldStatus } from '@components/type';
import { CheckIcon, ChevronDownIcon, Cross2Icon } from '@radix-ui/react-icons';
import { HTMLAttributes, Ref } from 'react';

import classNames from 'classnames';
import '../Menu/Menu.css';
import './Select.css';

export type SelectItem = { value: string; label: string; disabled?: boolean };

export type BaseSelectProps = HTMLAttributes<HTMLButtonElement> & {
	className?: string;
	disabled?: boolean;
	items?: Array<SelectItem>;
	label?: string;
	placeholder?: string;
	supportingText?: string;
	ref?: Ref<HTMLButtonElement>;
	status?: FieldStatus;
	required?: boolean;
	deselectable?: boolean;
	loopFocus?: boolean;
	clearable?: boolean;
	value?: string[];
	multiple?: boolean;
	CustomValueText?: React.ReactNode;
	onValueChange?: Select.RootProps<SelectItem>['onValueChange'];
};

const BaseSelect = ({
	items = [],
	status,
	label,
	className,
	ref,
	placeholder,
	disabled,
	deselectable,
	supportingText,
	loopFocus,
	clearable,
	value,
	multiple,
	onValueChange,
	CustomValueText,
	...rest
}: BaseSelectProps) => {
	const collection = createListCollection({ items });

	return (
		<Select.Root
			className={classNames('Select_Root', className)}
			collection={collection}
			disabled={disabled}
			deselectable={deselectable}
			loopFocus={loopFocus}
			value={value}
			multiple={multiple}
			onValueChange={onValueChange}
		>
			<Select.Label className="FormLabel" data-status={status}>
				{label}
			</Select.Label>

			<Select.Trigger ref={ref} className="Select_Field" data-status={status} {...rest}>
				{CustomValueText ?? (
					<Select.ValueText className="Select_Value" placeholder={placeholder} />
				)}
				<div className="Select_TrailingIcon">
					<ChevronDownIcon className="Select_ToggleIcon" width={20} height={20} />
					{clearable ? (
						<Select.ClearTrigger className="Select_ClearButton">
							<Cross2Icon width={20} height={20} />
						</Select.ClearTrigger>
					) : null}
				</div>
			</Select.Trigger>

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

export default BaseSelect;
