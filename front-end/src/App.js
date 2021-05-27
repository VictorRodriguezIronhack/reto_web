import React from 'react'
import axios from 'axios'
import {Switch, Route, Link} from 'react-router-dom'
import Phone from './components/Phone'
import './App.css';

class App extends React.Component {
state={
  phones:[]
}
  componentDidMount(){
    axios({
      method: 'get',
      url: `http://localhost:5000/telefonos`,
      withCredentials: true,
    })
     .then((result) => {
       console.log(result)
       this.setState({phones: result.data})
     }).catch((err) => {
       console.log(err)
     });
  }
  render(){
    console.log(this.state)
  return (
    <div className="App">
    <h1>Home</h1>
    <Link to="/telefonos">Phones</Link>
    <Switch>
    <Route path="/telefonos" exact component={()=> <Phone /> } />
    </Switch>
    </div>
  );
  }
}

export default App;
