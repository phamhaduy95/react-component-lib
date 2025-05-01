
import { DatePicker, DateRangePicker } from '@packages/react-components';
import { useState } from 'react';

const DatePickerPage = () => {
	const [dataValue, setValue] = useState('');

	const [dateRange, setDateRange] = useState<string[]>([]);

	return (
		<div className="flex flex-col">
			<section className="mb-4">
				<header>Date Picker</header>
				<DatePicker value={dataValue} onValueChange={(value) => setValue(value ?? '')} />
				<p>selected Date: {dataValue}</p>
			</section>
			<section className="mb-4">
				<header>Date Range Picker</header>
				<DateRangePicker
					value={dateRange}
					onValueChange={(value) => setDateRange(value ?? [])}
				/>
				<p>{dateRange.join(', ')}</p>
			</section>
		</div>
	);
};

export default DatePickerPage;
