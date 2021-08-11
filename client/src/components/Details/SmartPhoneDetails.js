import { useEffect, useState } from 'react'
import mobileService from '../../services/phones.service'

import Cards from "../Cards/Cards"



const MobileDetails = (props) => {

    const mobileservice = new mobileService

    const { phone_id } = props.match.params

    const [result, setResult] = useState([])

    useEffect(() => {
        mobileservice.mobileDetails(phone_id).then((res) => {
            setResult(...res.data);
        });
    }, []);

    return (
        <div className="phones-details" key={result.id}>
            <img src={`http://localhost:5000/static/images/${result.imageFileName}`} alt={result.name} />
            <h4> {result.name}</h4>
            <p>Color: {result.color}</p>
            <p>Price: {result.price}</p>
        </div>
    )

}
export default MobileDetails