
import './App.scss';
import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import axios from 'axios'
import AllPhones from './Components/AllPhones'
import PhoneDetails from './Components/PhoneDetails'

class App extends React.Component {
  state = {
    phoneList: []
  }

  componentDidMount(){
    axios({
      method: 'get',
      url: `http://localhost:5000/phones/all-phones`,
      withCredentials: true,
    })
    .then((result)=>{
      console.log(result)
      this.setState({phoneList: result.data})
    })
    .catch((error)=>{
      console.log(error)
    })
    
}

  render(){
    return this.state.phoneList.length ? (
      <div className="App">

      <Switch>
        <Route path="/" exact component={()=> <AllPhones phones={this.state.phoneList} />} />
        <Route path="/PhoneDetails/:id" exact component={(routeProps) => ( <PhoneDetails {...routeProps}
                allPhones={this.state.phoneList}/>)} />
      </Switch>
      </div>
    ) : (
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
  }
}

export default App;
