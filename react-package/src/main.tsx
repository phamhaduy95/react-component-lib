import '@styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteConfig from './RoutesConfig.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouteConfig />
	</React.StrictMode>
);
