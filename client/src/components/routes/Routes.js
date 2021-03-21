import { Switch, Route } from 'react-router-dom'

import PhonesListPage from '../pages/PhonesList/PhonesListPage'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact render={() => <PhonesListPage />} />
        </Switch>
    )
}

export default Routes