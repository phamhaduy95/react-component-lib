import {
	DatePicker as ArkDatePicker,
	parseDate,
	useDatePickerContext
} from '@ark-ui/react/date-picker';

import { Portal } from '@ark-ui/react/portal';
import BaseCalendarView from '@components/Calendar/BaseCalendarView';
import FormLabel from '@components/FormLabel/FormLabel';
import { CalendarIcon } from '@radix-ui/react-icons';
import { AriaAttributes, useId, useMemo } from 'react';
import './DateRangePicker.css';

type DateRangePickerProps = AriaAttributes &
	Pick<
		ArkDatePicker.RootProps,
		'selectionMode' | 'open' | 'onOpenChange' | 'fixedWeeks' | 'format'
	> & {
		label?: string;
		id?: string;
		inputId?: string;
		'data-testid'?: string;
		value?: string[];
		onValueChange?: (value?: string[]) => void;
	};

const DateRangePicker = ({
	label,
	'aria-label': ariaLabel,
	id,
	value,
	onValueChange,
	open,
	onOpenChange
}: DateRangePickerProps) => {
	const uuid = useId();

	const internalValue = useMemo(() => (value ? parseDate(value) : undefined), [value]);

	const handleDateChange: ArkDatePicker.RootProps['onValueChange'] = (data) => {
		if (onValueChange) {
			const dates = data.value.map((e) => e.toString());
			onValueChange(dates);
		}
	};

	return (
		<ArkDatePicker.Root
			className="DatePicker"
			id={id}
			value={internalValue}
			onValueChange={handleDateChange}
			selectionMode="range"
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
				asChild
			>
				<ArkDatePicker.Trigger>
					<DateRangeDisplay />
					<div className="Field_TrailingIcon">
						<CalendarIcon height={16} width={16} />
					</div>
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

export default DateRangePicker;

const DateRangeDisplay = () => {
	const { valueAsString } = useDatePickerContext();
	const [startDate, endDate] = valueAsString;

	if (startDate)
		return (
			<span>
				{startDate} - {endDate}
			</span>
		);
};
