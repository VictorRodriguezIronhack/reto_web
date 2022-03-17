import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import phonesService from "../../services/phones.services"

import "./DetailPage.css"

const DetailPage = () => {

    const [phone, setPhone] = useState([])


    const { id } = useParams()

    useEffect(() => {

        getPhone(id)

    }, [])

    const getPhone = (id) => {

        phonesService
            .getOne(id)
            .then(res => setPhone(res.data))
            .catch(err => console.log(err))

    }


    return (

        <>

            <h1>Details of {phone.name}</h1>
            <Row >
                <Col md={4}>
                    {
                  phone.name && <img src={require(`../../assets/${phone.imageFileName}`)} alt='phone' />
                    }
                </Col>
                <Col md={6} className='phoneCol mt-5'>
                    <article className="phoneSpecs">
                        <p>{phone.manufacturer}</p>
                        <p>{phone.description}</p>
                        <p>Procesador: {phone.processor} RAM: {phone.ram}gb</p>
                        <p>Pantalla: {phone.screen}</p>

                        <p>{phone.price}€ {phone.color}</p>

                    </article>
                </Col>
            </Row>

            <Link to={'/'}>Volver</Link>

        </>
        
        )

}


export default DetailPage