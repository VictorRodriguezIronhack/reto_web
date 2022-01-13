import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import HomePage from './pages/HomePage';

//Pagina telefonos
import Phone from './pages/Telefonos';
import PhoneDetails from './pages/Telefonos_detail';

import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute'; // <== IMPORT
import AnonRoute from './components/AnonRoute/AnonRoute'; // <== IMPORT

function App() {
	return (
		<div className="App">
			<Navbar />

			<Switch>
				{/* <Route exact path="/" component={HomePage} /> */}
				<Route exact path="/">
					<Redirect to="/telefonos" />
				</Route>
				<Route exact path="/telefonos" component={Phone} />
				<Route exact path="/telefonos/:id" component={PhoneDetails} />

				{/* 👇 UPDATE THE EXISTING ROUTES 👇  */}
				{/* <PrivateRoute exact path="/test" component={test} /> */}

				<AnonRoute exact path="/signup" component={SignupPage} />
				<AnonRoute exact path="/login" component={LoginPage} />
			</Switch>
		</div>
	);
}

export default App;
