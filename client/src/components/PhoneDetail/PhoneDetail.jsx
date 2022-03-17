import { Link } from "react-router-dom"

const PhoneDetail = ({ onePhone }) => {

    let image = onePhone?.imageFileName
    return (
        <div className="phoneDetails">
            <h1>Details</h1>

            <div className="phoneDetailsText">
                {image !== undefined && <img src={require(`../../images/${image}`)} alt="phone" className="detailsPhone" />}
                <div className="sideText">
                    <p><span>Nombre:</span> {onePhone.name}</p>
                    <p><span>Marca:</span> {onePhone.manufacturer}</p>
                    <p><span>Descripción:</span> {onePhone.description}</p>
                    <p><span>Color:</span> {onePhone.color}</p>
                    <p><span>Precio:</span> {onePhone.price}</p>
                    <p><span>Pantalla:</span> {onePhone.screen}</p>
                    <p><span>Procesador:</span> {onePhone.processor}</p>
                    <p><span>Ram:</span> {onePhone.ram}</p>
                </div>
            </div>
            <Link to='/'>Volver</Link>
        </div>
    )
}

export default PhoneDetail