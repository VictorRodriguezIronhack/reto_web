import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Login from './Pages/Login/Login'
import Signup from './Pages/SignUp/Signup'
import Home from './Pages/Home/Home'
import Navigation from './Pages/Nav/Nav'
import AuthService from './../Service/Auth.service'
import PhoneForm from './Pages/Phone/Phone-form'
import PhoneList from './Pages/Phone/PhoneList'
import PhoneDetails from './Pages/Phone/PhoneDetails'
import PhoneEdit from './Pages/Phone/Phone-edit'

class App extends Component {
    constructor() {
        super()
        this.state = {
            loggedInUser: undefined
        }
        this.authServices = new AuthService()
    }

    componentDidMount = () => {
        if (this.state.loggedInUser === undefined) {
            this.authServices
                .isLoggedIn()
                .then(response => this.setTheUser(response.data))
                .catch(err => this.setTheUser(undefined))
        }
    }

    setTheUser = user => {
        this.setState({ loggedInUser: user })
        console.log(user)
}
    render() {
        return (
            <>
                <Navigation storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} />
                <Switch>
                
                    <main>
                        <Route exact path="/" render={()=><Home></Home>}/>
                        <Route path="/login" render={props => <Login storeUser={this.setTheUser} {...props} />} />
                        <Route path="/signup" render={props => <Signup storeUser={this.setTheUser} {...props} />} />
                        <Route path="/nuevo-telefono" render={() => <PhoneForm loggedUser={this.state.loggedInUser}></PhoneForm>} />
                        <Route path="/phones" render={props => <PhoneList {...props} loggedUser={this.state.loggedInUser}></PhoneList>} />
                        <Route path="/phone/:phone_id" render={props => <PhoneDetails {...props}  />} />
                        <Route path="/edit-phone/:phone_id" render={props => <PhoneEdit {...props} />} />

                    </main>
                
                </Switch>
            </>
        )

    }
}
export default App