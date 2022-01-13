import './App.css';
import AllPhones from './pages/allPhones/AllPhones';
import PhoneDetails from './components/phoneDetails/PhoneDetails';
import PhonesService from './services/phones.service';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';


const myPhonesService = new PhonesService();

function App() {

	const [phones, setPhones] = useState({
		allPhones: [],
		loading: true
	});


	useEffect(() => {
		async function getPhones() {
			const phones = await myPhonesService.getAllPhones();
			setPhones({
				allPhones: phones.data,
				loading: false
			});
		}
		getPhones();
	}, [])

	function filterPhones(id){
		const phone = phones.allPhones.filter(phone => phone.id === +id);
		return phone[0];
	}

	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact render={() => <AllPhones phones={phones.allPhones}/>}/>
					<Route path="/:id" exact render={(props) => <PhoneDetails {...props} phone={filterPhones(props.match.params.id)} />} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
