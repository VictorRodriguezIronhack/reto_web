import { Link } from "react-router-dom"

const PhoneDetail = ({ onePhone }) => {

    let image = onePhone?.imageFileName
    return (
        <>
            <h1>Details</h1>

            <p>{onePhone.name}</p>
            {image !== undefined && <img src={require(`../../images/${image}`)} alt="phone" className="detailsPhone" />}
            <p>{onePhone.manufacturer}</p>
            <p>{onePhone.description}</p>
            <p>{onePhone.color}</p>
            <p>{onePhone.price}</p>
            <p>{onePhone.screen}</p>
            <p>{onePhone.processor}</p>
            <p>{onePhone.ram}</p>
            <Link to='/'>Volver</Link>
        </>
    )
}

export default PhoneDetail