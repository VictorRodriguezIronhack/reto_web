import './App.css';
import React from 'react';
// import PhonesService from './services/PhonesService';
import Phones from './components/Phones';
import SinglePhone from './components/SinglePhone';
import { Route } from 'react-router-dom';


class App extends React.Component {

// service = new PhonesService();

// getPhones(){
// this.service.getPhones()
// .then((result)=>{
//   this.setState({phones: result})
// })
// .catch((err)=>{
//   console.log(err);
// });
// }



  render(){
    return (
      <div className="App">
        <Route
					exact path="/"
					render={() => (
							<Phones/>
					)}
				/> 

        <Route
					path="/:id"
					render={(props)=> (
            <SinglePhone
              {...props}
            />
          )}
				/>  
      </div>
    );
  }
}

export default App;
