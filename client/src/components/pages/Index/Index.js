import { useState, useLayoutEffect } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import './home.css'
import { Link } from 'react-router-dom'
import PhoneService from '../../services/phone.Services'

const IndexPage = () => {

    const phoneService = new PhoneService()
    const [phones, setPhones] = useState(undefined)

    useLayoutEffect(() => {
        phoneService
            .getPhones()
            .then(response => setTimeout(() => { setPhones(response.data) }, 500))

    }, [])

    return (
        <>
            <section >
                <Container as="section">
                    <h1>Phones</h1>
                    {phones
                        ?

                        <Row style={{ marginBottom: 100 }}>
                            {phones?.map(elm =>
                                <Col md={3} key={elm.id}>

                                    <Link to={`./detalles/${elm.id}`}>
                                        <img style={{ width: '100%', height: 250, marginBottom: 20, display: 'block', margin: '0 auto' }} src={`https://res.cloudinary.com/df5xojjiw/image/upload/v1616327791/retoWeb/${elm.imageFileName}`} alt={elm.name} />
                                        {elm.name}
                                    </Link>
                                </Col>
                            )}
                        </Row>
                        :
                        <Spinner className='loader' style={{ marginTop: 100 }} animation="border" variant="success" />
                    }
                </Container>


            </section>
        </>
    )
}

export default IndexPage