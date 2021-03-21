import { Switch, Route } from 'react-router-dom'

import IndexPage from '../pages/Index/Index'
import PhoneDetails from '../pages/Phone/Phone'



const Routes = ({ elm }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/detalles/:id" exact render={props => <PhoneDetails {...props} />} />

        </Switch>
    )
}

export default Routes