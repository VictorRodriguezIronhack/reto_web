import React from 'react'
import PhonesService from '../services/PhonesService';
import Card from './Card';


class Phones extends React.Component{


        state = {
            phones: [],
            toggler: false
        };

    service = new PhonesService();

    getPhones(){
      this.service.getPhones()
        .then((result)=>{
          this.setState({phones: result, toggler: true})
        })
        .catch((err)=>{
          console.log(err);
        });
    }

    componentDidMount(){
        this.getPhones();
    }


    render(){
      if(this.state.toggler){
        return(
          <div className="Phones">
            <h3>Phones</h3>
            {this.state.phones.map((phone, index)=>{
                return(
                    <div key={index}>
                        <Card info={phone}/>
                    </div>
                )
            })}
          </div>
        )
      } else {
        return(
          <div className="Phones">

            <h3>Phones</h3>

            <div className="loading alert alert-secondary" role="alert">
              <h4>Cargando</h4>
              <i className="fas fa-circle-notch fa-spin fa-3x"></i>
              <br></br>
              <span>Espere por favor</span>
            </div>

          </div>
        )
      }
    }
} 


// {this.props.userRecipes.map((recipe, index)=>{
//     return (
//         <div key={index}>
//             <RecipeCard recipe={recipe} deleteRecipe={this.deleteRecipe}/>
//             <button className="delete-button" onClick={()=>{this.deleteRecipe(recipe._id)}}> <i className="delete-image fas fa-trash-alt"></i> </button>
//         </div>
//         )
// })}



export default Phones;