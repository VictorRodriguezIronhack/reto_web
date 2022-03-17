import { useParams, Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import "./PhoneDetails.css"

function PhoneDetails({ phones }) {

    const { id } = useParams()

    const element = phones.find(elem => {
        return elem.id === Number.parseInt(id)
    })

    return (

        <div className="detalles">
            <h1> {element.name}</h1>
            <img src={element?.imageFileName} alt={element.name}/>
            <p><strong>Fabcicante: </strong>{element.manufacturer}</p>
            <p><strong>Descripción: </strong>{element.description}</p>
            <p><strong>Color: </strong>{element.color}</p>
            <p><strong>Precio: </strong>{element.price} €</p>
            <p><strong>Pantalla: </strong>{element.screen}</p>
            <p><strong>Procesador: </strong>{element.processor}</p>
            <p><strong>Ram: </strong>{element.ram}</p>
            <Link to="/">
                <Button variant="dark">Volver</Button>
            </Link>
        </div>
    )
}

export default PhoneDetails