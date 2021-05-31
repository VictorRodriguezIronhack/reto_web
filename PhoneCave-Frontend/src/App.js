import { Route } from 'react-router-dom';
import Phones from './components/PhonesComponent';
import PhoneDetails from './components/PhoneDetailsComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Phones} />
      <Route exact path="/phones/:id" component={PhoneDetails} />
    </div>
  );
}

export default App;
