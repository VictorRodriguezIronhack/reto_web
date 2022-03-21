import { useState } from 'react'
import { Link } from "react-router-dom"
import Spinner from '../Spinner/Spinner'
import { Container, Col, Row } from 'react-bootstrap'
import './PhoneList.css'

function PhoneList({ thePhones }) {
    const [phones, setPhones] = useState(thePhones)

    return (
        <Container className='m-5'>
            <h1 className='title' >Móviles</h1>

            {!phones && <Spinner />}
            <Row>

                {
                    phones?.map(phone => {
                        const { id, name, imageFileName } = phone
                        return (
                            < Col md={6} >
                                <article key={id}>
                                    <Link to={`/telefonos/${id}`}>
                                        <img className='eachimage' src={require(`../../../public/img/${imageFileName}`)} />
                                        <h2 className='eachphone'>{name}</h2>
                                    </Link>

                                </article>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container >
    )

}
export default PhoneList