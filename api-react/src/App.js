
import './App.css';
import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Telefonos from './Telefonos'


class App extends React.Component {
  state = {
    phoneList: []
  }

  componentDidMount(){
    axios({
      method: 'get',
      url: `http://localhost:5000/phones/telefonos`,
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
    return (
      <div className="App">

        <h1>Home</h1>
        <Link to="/telefonos">List</Link>
      <Switch>
        <Route path="/telefonos" exact component={()=> <Telefonos phones={this.state.phoneList} />} />
      </Switch>
      </div>
    )
  }
}

export default App;
