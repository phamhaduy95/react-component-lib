import { DatePicker } from '@ark-ui/react/date-picker';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import './Calendar.css';

const BaseCalendarView = () => {
	return (
		<DatePicker.View view="day" className="CalendarView">
			<DatePicker.Context>
				{(datePicker) => (
					<>
						<DatePicker.ViewControl className="CalendarViewControl">
							<DatePicker.PrevTrigger className="CalendarNavTrigger">
								<ChevronLeftIcon height={20} width={20} />
							</DatePicker.PrevTrigger>
							<DatePicker.RangeText />
							<DatePicker.NextTrigger className="CalendarNavTrigger">
								<ChevronRightIcon height={20} width={20} />
							</DatePicker.NextTrigger>
						</DatePicker.ViewControl>
						<DatePicker.Table className="CalendarTable">
							<DatePicker.TableHead className="CalendarHeader">
								<DatePicker.TableRow>
									{datePicker.weekDays.map((weekDay, id) => (
										<DatePicker.TableHeader
											key={id}
											className="CalendarHeadCol"
										>
											{weekDay.short}
										</DatePicker.TableHeader>
									))}
								</DatePicker.TableRow>
							</DatePicker.TableHead>
							<DatePicker.TableBody className="CalendarBody">
								{datePicker.weeks.map((week, id) => (
									<DatePicker.TableRow key={id}>
										{week.map((day, id) => (
											<DatePicker.TableCell
												key={id}
												value={day}
												className="CalendarTableCell"
											>
												<DatePicker.TableCellTrigger className="CalendarTableTrigger">
													{day.day}
												</DatePicker.TableCellTrigger>
											</DatePicker.TableCell>
										))}
									</DatePicker.TableRow>
								))}
							</DatePicker.TableBody>
						</DatePicker.Table>
					</>
				)}
			</DatePicker.Context>
		</DatePicker.View>
	);
};

export default BaseCalendarView;
