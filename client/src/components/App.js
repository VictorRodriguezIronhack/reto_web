import 'bootstrap/dist/css/bootstrap.min.css'

import { Switch, Route } from 'react-router-dom'
import PhoneList from './pages/phoneList'
import PhoneDetails from './pages/phoneDetails.js'

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" exact render={() => <PhoneList />} />
        <Route path="/phone/:phoneId" exact render={props => <PhoneDetails {...props} />}/>
      </Switch>
    </main>
  );
}

export default App;
