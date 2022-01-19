import './App.css';
import AllPhones from './pages/allPhones/AllPhones';
import PhoneDetails from './components/phoneDetails/PhoneDetails';
import useAllPhones  from './hooks/useAllPhones';
import { AllPhonesContext } from './contexts/AllPhonesContext';
import { Routes, Route} from 'react-router-dom';


function App() {

	const {allPhones, setAllPhones} = useAllPhones();


	return (
		<div className="App">

			<AllPhonesContext.Provider value={{allPhones, setAllPhones}}>
					<Routes>
							<Route path="/" element={<AllPhones/>} />
							<Route path=":id" element={<PhoneDetails/>} />
					</Routes>
			</AllPhonesContext.Provider>

		</div>
	);
}

export default App;
