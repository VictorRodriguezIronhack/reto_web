import React from 'react'
import { Switch, Route} from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';
import Phoneslist from '../pages/Phonepage/Phonelist'


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Homepage />} />
      <Route exact path="/telefonos" render={() => <Phoneslist />} />
    </Switch>
  )
}

export default Routes