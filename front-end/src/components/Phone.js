import React from 'react'
import {Link} from 'react-router-dom'



class Phone extends React.Component{
getPhones(){
return this.props.phones.map((phone, index)=>{
return(
    <div key={index} className='each-phone' >
    <Link to={`/telefonos/${phone.id}`}>
        <img src={`/${phone.imageFileName}`} alt="Phone img" />
        <div>
        <p>{phone.name} </p>
        <p>Price: {phone.price}</p>
        </div>
    </Link>
    </div>
)
})
}
    render(){
        return(
            <div className='Phone-list'>
                {this.getPhones()}
            </div>
        )
    }
}
export default Phone