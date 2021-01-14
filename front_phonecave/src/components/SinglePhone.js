import React from 'react';
import PhonesService from '../services/PhonesService';
import { Link } from 'react-router-dom';



class SinglePhone extends React.Component{

  state = {
    phone: {},
    toggler: false
  };

  service = new PhonesService();

  getPhone(){
  this.service.getSinglePhone(this.props.match.params.id)
  .then((result)=>{
    this.setState({phone: result, toggler: true})
  })
  .catch((err)=>{
    console.log(err);
  });
  }

  componentDidMount(){
  this.getPhone();
  }


  render(){
    if(this.state.toggler){
      return(
        <div className="SinglePhone">
        
          <div className="info">
            <h4>{this.state.phone.name}</h4>
            <img src={`/${this.state.phone.imageFileName}`} alt={this.state.phone.name}/>
            <p><strong>Fabricante: </strong>{this.state.phone.manufacturer}</p>
            <p><strong>Color: </strong>{this.state.phone.color}</p>
            <p><strong>Precio: </strong>{this.state.phone.price} €</p>
            <p><strong>Pantalla: </strong>{this.state.phone.screen}</p>
            <p><strong>Procesador: </strong>{this.state.phone.processor}</p>
            <p><strong>Ram: </strong>{this.state.phone.ram} GB</p>
            <p className="description"><strong>Descripción: </strong>{this.state.phone.description}</p>
  
            <Link to="/" className="btn btn-outline-secondary">Volver</Link>
          </div>

        </div>
      )
    } else {
      return(
        <div className="SinglePhone">
        
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

export default SinglePhone;