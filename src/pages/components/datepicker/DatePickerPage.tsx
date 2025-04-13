import DatePicker from '@components/DatePicker/DatePicker';

import { useState } from 'react';

const DatePickerPage = () => {
	const [dataValue, setValue] = useState('');

	return (
		<div className="flex flex-col">
			<section className="mb-4">
				<header>Date Picker</header>
				<DatePicker value={dataValue} onValueChange={(value) => setValue(value ?? '')} />
				<p>selected Date: {dataValue}</p>
			</section>
		</div>
	);
};

export default DatePickerPage;
