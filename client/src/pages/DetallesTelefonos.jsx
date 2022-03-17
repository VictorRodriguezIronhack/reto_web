import { useState, useEffect } from "react";
import telefonosService from "../services/telefonos.service";
import useParams from 'react-router-dom'

const [detallesTelefonos, setDetallesTelefonos] = useState({})
const { telefonos_id } = useParams()

useEffect(() => {
    telefonosService
        .getAllTelefonos(_id)
        .then(({ data }) => setDetallesTelefonos(data))
        .catch(err => console.log(err))
}, [])

export default DetallesTelefonos
