import './App.css';
import { useState } from 'react';
import AllPhones from './pages/allPhones/AllPhones';
import PhoneDetails from './pages/phoneDetails/PhoneDetails';
import useAllPhones  from './hooks/useAllPhones';
import { AllPhonesContext } from './contexts/AllPhonesContext';
import { CartContext } from './contexts/CartContext';
import { Routes, Route} from 'react-router-dom';


function App() {

	const {allPhones, setAllPhones} = useAllPhones();

	const [cart, setCart] = useState([]);


	return (
		<div className="App">

			<AllPhonesContext.Provider value={{allPhones, setAllPhones}}>
			<CartContext.Provider value={{cart, setCart}}>
					<Routes>
							<Route path="/" element={<AllPhones/>} />
							<Route path=":id" element={<PhoneDetails/>} />
					</Routes>
			</CartContext.Provider>
			</AllPhonesContext.Provider>

		</div>
	);
}

export default App;
