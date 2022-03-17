import { useState, useEffect } from "react";
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
                </div>
            })}
        </>
    )
}



export default TelefonosLista