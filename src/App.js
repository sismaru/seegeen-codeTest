import { RouterProvider } from 'react-router-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={Routes} />
		</Provider>
	);
}

export default App;
