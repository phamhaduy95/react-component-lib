import { DatePicker as ArkDatePicker, DateValue, parseDate } from '@ark-ui/react/date-picker';

import { Portal } from '@ark-ui/react/portal';
import BaseCalendarView from '@components/Calendar/BaseCalendarView';
import FormLabel from '@components/FormLabel/FormLabel';
import { AriaAttributes, useId, useMemo } from 'react';
import './DatePicker.css';

type DatePickerProps = AriaAttributes &
	Pick<
		ArkDatePicker.RootProps,
		'selectionMode' | 'open' | 'onOpenChange' | 'fixedWeeks' | 'format'
	> & {
		label?: string;
		id?: string;
		inputId?: string;
		'data-testid'?: string;
		value?: string;
		onValueChange?: (value?: string, date?: DateValue) => void;
	};

const DatePicker = ({
	label,
	'aria-label': ariaLabel,
	id,
	value,
	onValueChange,
	open,
	onOpenChange
}: DatePickerProps) => {
	const uuid = useId();

	const internalValue = useMemo(() => (value ? [parseDate(value)] : undefined), [value]);

	const handleDateChange: ArkDatePicker.RootProps['onValueChange'] = (data) => {
		const dateStr = data.value[0].toString();
		if (onValueChange) onValueChange(dateStr, data.value[0]);
	};

	return (
		<ArkDatePicker.Root
			className="DatePicker"
			id={id}
			value={internalValue}
			onValueChange={handleDateChange}
			selectionMode="single"
			open={open}
			onOpenChange={onOpenChange}
		>
			<FormLabel type="p" id={uuid}>
				{label}
			</FormLabel>
			<ArkDatePicker.Control
				className="DatePicker_InputField"
				aria-role="group"
				aria-labelledby={uuid}
				aria-label={ariaLabel}
			>
				<ArkDatePicker.Input className="DatePicker_Input" />
				<ArkDatePicker.Trigger>📅</ArkDatePicker.Trigger>
			</ArkDatePicker.Control>
			<Portal>
				<ArkDatePicker.Positioner>
					<ArkDatePicker.Content>
						<BaseCalendarView />
					</ArkDatePicker.Content>
				</ArkDatePicker.Positioner>
			</Portal>
		</ArkDatePicker.Root>
	);
};

export default DatePicker;
