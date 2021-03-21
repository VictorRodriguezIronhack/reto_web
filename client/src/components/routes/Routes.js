import {Switch, Route} from 'react-router-dom'

import Phones from '../pages/Phones/Phones'
import PhoneDetails from '../pages/PhoneDetails/PhoneDetails'

const Routes = () => {

    return (
        <Switch>
            <Route path='/' exact render={() => <Phones />} />
            <Route path='/:id' exact render={(props) => <PhoneDetails {...props} />} />
        </Switch>
    )
}

export default Routes