import {Switch, Route} from 'react-router-dom'

import Phones from '../pages/Phones/Phones'
import PhoneDetails from '../pages/PhoneDetails/PhoneDetails'

const Routes = ({handleAlert}) => {

    return (
        <Switch>
            <Route path='/' exact render={() => <Phones handleAlert={handleAlert} />} />
            <Route path='/:id' exact render={(props) => <PhoneDetails {...props} handleAlert={handleAlert} />} />
        </Switch>
    )
}

export default Routes