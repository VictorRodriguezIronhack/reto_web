import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

//Pagina telefonos
import Phone from './pages/Telefonos';

import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute'; // <== IMPORT
import AnonRoute from './components/AnonRoute'; // <== IMPORT

function App() {
	return (
		<div className="App">
			<Navbar />

			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/telefonos" component={Phone} />

				{/* 👇 UPDATE THE EXISTING ROUTES 👇  */}
				{/* <PrivateRoute exact path="/projects" component={ProjectListPage} /> */}

				<AnonRoute exact path="/signup" component={SignupPage} />
				<AnonRoute exact path="/login" component={LoginPage} />
			</Switch>
		</div>
	);
}

export default App;
