import { Combobox, createListCollection } from '@ark-ui/react/combobox';
import { Portal } from '@ark-ui/react/portal';
import { SelectItem } from '@components/Select/BaseSelect';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import { HTMLAttributes, Ref, useMemo, useState } from 'react';

import { FieldStatus } from '@components/type';
import './ComboBox.css';

export type BaseComboboxProps = HTMLAttributes<HTMLInputElement> & {
	className?: string;
	disabled?: boolean;
	items?: Array<SelectItem>;
	label?: string;
	placeholder?: string;
	supportingText?: string;
	ref?: Ref<HTMLInputElement>;
	status?: FieldStatus;
	required?: boolean;
	loopFocus?: boolean;
	value?: string[];
	onValueChange?: Combobox.RootProps<SelectItem>['onValueChange'];
	multiple?: boolean;
	CustomValueText?: React.ReactNode;
};

export const BaseCombobox = ({
	label,
	items = [],
	value,
	onValueChange,
	loopFocus,
	placeholder,
	multiple,
	disabled,
	status,
	CustomValueText
}: BaseComboboxProps) => {
	const [searchValue, setSearchValue] = useState('');

	const filteredItems = useMemo(() => {
		if (!searchValue) return items;
		return items.filter(
			(e) => e.label.toLowerCase().includes(searchValue.toLocaleLowerCase()) && !e.disabled
		);
	}, [searchValue, items]);

	const collection = createListCollection({ items: filteredItems });

	const highlightMatchedSearchValue = (itemLabel: string) => {
		if (!searchValue) return itemLabel;
		const Regex = RegExp(`${searchValue}`, 'gi');
		const results: React.ReactNode[] = [];
		let start = 0;
		let match: RegExpExecArray | null;
		while ((match = Regex.exec(itemLabel)) !== null) {
			const noMatchedSegment = <span>{itemLabel.slice(start, match.index)}</span>;

			start = match.index + match[0].length;

			const matchedSegment = (
				<span className="HighlightedText">{itemLabel.slice(match.index, start)}</span>
			);

			results.push(noMatchedSegment, matchedSegment);
		}

		const remaining = start < itemLabel.length ? <span>{itemLabel.slice(start)}</span> : null;

		results.push(remaining);

		return results;
	};

	const renderEmptyItemMessage = () => {
		if (filteredItems.length === 0)
			return (
				<Combobox.Item className="Menu_Item" key={'no item'} item={{}}>
					<Combobox.ItemText asChild>
						<p>No Item founded</p>
					</Combobox.ItemText>
				</Combobox.Item>
			);
	};

	return (
		<Combobox.Root
			collection={collection}
			onInputValueChange={(data) => {
				setSearchValue(data.inputValue.trim());
			}}
			onExitComplete={() => {
				setSearchValue('');
			}}
			value={value}
			onValueChange={onValueChange}
			loopFocus={loopFocus}
			disabled={disabled}
			multiple={multiple}
		>
			<Combobox.Label className="FormLabel" data-status={status}>
				{label}
			</Combobox.Label>
			<Combobox.Control className="Combobox_Field" data-status={status}>
				{CustomValueText ?? (
					<Combobox.Input
						className="Combobox_Input"
						placeholder={placeholder}
						disabled={disabled}
					/>
				)}
				<Combobox.Trigger className="Combobox_Trigger" aria-label="Trigger popup">
					<ChevronDownIcon className="Combobox_TriggerIcon" />
				</Combobox.Trigger>
			</Combobox.Control>
			<Portal>
				<Combobox.Positioner>
					<Combobox.Content className="Menu Combobox_Content">
						{collection.items.map((item) => (
							<Combobox.Item className="Menu_Item" key={item.value} item={item}>
								<Combobox.ItemText asChild>
									<p>{highlightMatchedSearchValue(item.label)}</p>
								</Combobox.ItemText>
								<Combobox.ItemIndicator className="MenuItem_TrailingIcon">
									<CheckIcon height={16} width={16} />
								</Combobox.ItemIndicator>
							</Combobox.Item>
						))}
						{renderEmptyItemMessage()}
					</Combobox.Content>
				</Combobox.Positioner>
			</Portal>
		</Combobox.Root>
	);
};
