import React from 'react'



class PhoneDetails extends React.Component{
     getPhonesDetails(){
       const phone = this.props.phones.filter((phone)=>{
         return phone.id.toString() === this.props.match.params.id
       })[0]
     return(
      <div className='phone-details-card'>
        <img src={`/${phone.imageFileName}`} alt="Phone img" />
        <p>{phone.name} || {phone.manufacturer}</p>
        <p>Price: {phone.price}</p>
        <p>Screen: {phone.screen}</p>
        <p>Processor: {phone.processor} || Ram: {phone.ram}</p>
        <p>{phone.description}</p>
      </div>
)
}
    render(){
        return(
            <div>
                {this.getPhonesDetails()}
            </div>
        )
    }
}
export default PhoneDetails