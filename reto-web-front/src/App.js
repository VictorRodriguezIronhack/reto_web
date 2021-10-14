import './index.scss';
import axios from "axios"
import React from "react"
import {Switch, Route, Link} from "react-router-dom";
import PhoneList from './components/PhoneList';
import PhoneDetails from './components/PhoneDetails';
import Spinner from './components/Spinner';


class App extends React.Component{
  state={
    phoneList:[],
    loaded:false
  }

  componentDidMount(){
    axios({
        method: "get",
        url: "http://localhost:5000/phones/telefonos",
        withCredentials: true
      })
      .then((result) => {
        console.log(result)
        this.setState({phoneList:result.data, loaded:true})
      })
}
render(){
    return this.state.loaded ? (
    <div className="App"> 
    <h1 className="Title"><Link to="/">MedioMuerto</Link></h1>
      <Switch>
        <Route
          path="/"
          exact
          component={() => <PhoneList phones={this.state.phoneList}/>}
        />
        <Route
          path="/telefonos/:id"
          exact
          component={(routeProps) =>  <PhoneDetails {...routeProps} phones={this.state.phoneList}/>}
        />
      </Switch>
    </div>
  ) : <Spinner />
}

}

export default App;
