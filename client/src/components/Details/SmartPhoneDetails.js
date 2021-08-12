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
        <div className="det-cont" key={result.id}>
            <img src={`http://localhost:5000/static/images/${result.imageFileName}`} alt={result.name} />
            <div className="phones-details">
                <h4> {result.name}</h4>
                <p>{result.description}</p>
                <p><strong>Color:</strong> {result.color}</p>
                <p><strong>Processor:</strong> {result.processor}</p>
                <p><strong>Ram:</strong> {result.ram}</p>
                <p><strong>Price:</strong> {result.price} €</p>
            </div>
        </div>
    )

}
export default MobileDetails