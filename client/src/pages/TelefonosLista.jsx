import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import telefonosService from "../services/telefonos.service";

const TelefonosLista = () => {

    const [telefonosLista, setTelefonosLista] = useState([])

    useEffect(() => {
        telefonosService
            .getAllTelefonos()
            .then(({ data }) => setTelefonosLista(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {telefonosLista.map(telefonos => {
                return <div key={telefonos.id}>
                    <p>{telefonos.name}</p>
                    <p>{telefonos.manufacturer}</p>
                    <p>{telefonos.price}</p>
                    <hr />
                    <Link to={`/detalles/${telefonos.id}`}>
                        Detalles
                    </Link>
                </div>
            })}
        </>
    )
}



export default TelefonosLista