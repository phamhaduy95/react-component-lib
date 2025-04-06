import ComponentsPage from '@pages/components';
import ButtonPage from '@pages/components/button/ButtonPage';
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
					<Route path="select" element={<SelectPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RouteConfig;
