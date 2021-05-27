import React from 'react'
import { Link } from 'react-router-dom'
class AllPhones extends React.Component {
    render(){
        console.log(this.props.phones)
         const allPhones = this.props.phones.map((phone)=>{
                return (
                    <div className="PhoneList">
                    <Link to={`/PhoneDetails/${phone.id}`}>
                    <img src={`./Images/${phone.imageFileName}` }alt ={phone.name}/>
                    </Link>
                    <h1>{phone.name}</h1>
                    <p><b>Price: </b>{phone.price} $</p>
                    </div>
                )
        })
         
        return this.props.phones ? (
            <div className="AllPhones">
            {allPhones}
            
            </div>
        ) : (
            <h1>Loading..</h1>
        )
    }
}

export default AllPhones