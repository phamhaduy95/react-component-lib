import ComponentsPage from '@pages/components';
import ButtonPage from '@pages/components/button/ButtonPage';
import HomePage from '@pages/homes/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router';

const RouteConfig = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="components" element={<ComponentsPage />}>
					<Route path="button" element={<ButtonPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RouteConfig;
