import { Switch, Route } from 'react-router-dom'
import PhoneList from '../pages/Phone/PhoneList'
import PhoneDetails from '../pages/Phone/PhoneDetails'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact render={() => <PhoneList />} />
            <Route path="/phone/:id" render={ props => <PhoneDetails {...props}/>} />
        </Switch>
    )
}

export default Routes