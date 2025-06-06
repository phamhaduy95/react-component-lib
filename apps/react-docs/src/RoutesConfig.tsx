import ComponentsPage from '@pages/components';
import ButtonPage from '@pages/components/button/ButtonPage';
import CalendarPage from '@pages/components/calendar/Calendar';
import ComboboxPage from '@pages/components/combobox/ComboboxPage';
import DatePickerPage from '@pages/components/datepicker/DatePickerPage';
import MenuPage from '@pages/components/menu/MenuPage';
import ScrollAreaPage from '@pages/components/scrollArea/ScrollAreaPage';
import SelectPage from '@pages/components/select/SelectPage';
import TextInputPage from '@pages/components/text-input/TextInputPage';
import HomePage from '@pages/homes/HomePage';

import { BrowserRouter, Route, Routes } from 'react-router';

const RouteConfig = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="components" element={<ComponentsPage />}>
					<Route path="button" element={<ButtonPage />} />
					<Route path="text-input" element={<TextInputPage />} />
					<Route path="menu" element={<MenuPage />} />
					<Route path="select" element={<SelectPage />} />
					<Route path="calendar" element={<CalendarPage />} />
					<Route path="datepicker" element={<DatePickerPage />} />
					<Route path="scroll-area" element={<ScrollAreaPage />} />
					<Route path="combobox" element={<ComboboxPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RouteConfig;
