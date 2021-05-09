import React, { Component } from 'react';

// import Icon from '../assets/Icon';
import ShoppingCart from './ShoppingCart';

class Header extends Component{
  state = {
    currentWindow: undefined
  }

  render(){
    const { image, number, titleProduct, price } = this.props;
    return(

        { this.state.currentWindow === 4
        ? <Information
        title="Carrito de compras"
        close={this.closeInformation}
        innerHTML={
        <ShoppingCart
        image={image}
        price={price}
        number={number}
        titleProduct={titleProduct}
        hideInformation={this.props.hideInformation}
        /> }
        />
        : null
        }
    )
  }
}

export default Header;