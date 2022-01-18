import './App.css';
import AllPhones from './pages/allPhones/AllPhones';
import PhoneDetails from './components/phoneDetails/PhoneDetails';
import { Routes, Route} from 'react-router-dom';

function App() {


	return (
		<div className="App">

				<Routes>
						<Route path="/" element={<AllPhones/>} />
						<Route path=":id" element={<PhoneDetails/>} />
				</Routes>

		</div>
	);
}

export default App;
