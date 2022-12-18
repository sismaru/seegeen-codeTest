import { createBrowserRouter, Route, createRoutesFromElements, Navigate } from 'react-router-dom';

// layout
import Layout from './layouts/Layout';
import NotFound from './layouts/NotFound';

const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route path="view/:seq" element={<Layout />}></Route>
			<Route path="/" element={<Navigate to="view/1" />}></Route>
			<Route path="*" element={<NotFound />}></Route>
		</Route>
	)
);

export default routes;