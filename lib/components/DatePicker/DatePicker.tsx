import { AriaAttributes, JSX, useId, useMemo } from 'react';

import { DatePicker as ArkDatePicker, DateValue, parseDate } from '@ark-ui/react/date-picker';
import { Portal } from '@ark-ui/react/portal';
import BaseCalendarView from '@components/BaseCalendarView/BaseCalendarView';
import FormLabel from '@components/FormLabel/FormLabel';
import { CalendarIcon } from '@radix-ui/react-icons';

import './DatePicker.css';

interface DatePickerProps
	extends AriaAttributes,
		Pick<
			ArkDatePicker.RootProps,
			'selectionMode' | 'open' | 'onOpenChange' | 'fixedWeeks' | 'format'
		> {
	label?: string;
	id?: string;
	inputId?: string;
	'data-testid'?: string;
	value?: string;
	onValueChange?: (value?: string, date?: DateValue) => void;
}

const DatePicker = (props: DatePickerProps): JSX.Element => {
	const { label, 'aria-label': ariaLabel, id, value, onValueChange, open, onOpenChange } = props;

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
				<ArkDatePicker.Trigger>
					<CalendarIcon height={16} width={16} className="cursor-pointer" />
				</ArkDatePicker.Trigger>
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
