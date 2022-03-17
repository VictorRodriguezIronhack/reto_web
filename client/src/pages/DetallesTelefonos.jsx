import { useState, useEffect } from "react";
import telefonosService from "../services/telefonos.service";
import useParams from 'react-router-dom'

function DetallesTelefonos() {

    const [detallesTelefonos, setDetallesTelefonos] = useState({})
    const { telefonos_id } = useParams()

    useEffect(() => {
        telefonosService
            .getAllTelefonos(_id)
            .then(({ data }) => setDetallesTelefonos(data))
            .catch(err => console.log(err))
    }, [])


    return (

        <div>

            <p>{telefonos.name}</p>
            <p>{telefonos.manufacturer}</p>
            <p>{telefonos.price}</p>
            <p>{telefonos.description}</p>
            <p>{telefonos.color}</p>
            <p>{telefonos.imageFileName}</p>
            <p>{telefonos.screen}</p>
            <p>{telefonos.processor}</p>
            <p>{telefonos.ram}</p>
            <hr />

        </div>



    )
}

export default DetallesTelefonos
