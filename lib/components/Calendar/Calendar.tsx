import { DatePicker } from '@ark-ui/react/date-picker';
import classNames from 'classnames';
import BaseCalendarView from './BaseCalendarView';

type CalendarProps = Pick<
	DatePicker.RootProps,
	| 'value'
	| 'view'
	| 'startOfWeek'
	| 'onValueChange'
	| 'max'
	| 'min'
	| 'selectionMode'
	| 'timeZone'
	| 'fixedWeeks'
> & {
	className?: string;
};

const Calendar = ({ className, ...rest }: CalendarProps) => {
	return (
		<DatePicker.Root
			open
			className={classNames('Calendar', className)}
			closeOnSelect={false}
			role="application"
			{...rest}
		>
			<BaseCalendarView />
		</DatePicker.Root>
	);
};
export default Calendar;
