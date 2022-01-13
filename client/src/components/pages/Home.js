import React, { useEffect, useState } from 'react';
import PhoneService from '../../services/phone.services';
import { Row, Col, Container } from 'react-bootstrap';
import PhoneCard from './PhoneCard';

const Home = () => {

    const [phones, setPhones] = useState([]);
    const [details, setDetails] = useState({
        id: undefined,
        name: undefined,
        manufacturer: undefined,
        descriptions: undefined,
        color: undefined,
        price: undefined,
        imageFileName: undefined,
        screen: undefined,
        processor: undefined,
        ram: undefined,
    });

    const phoneService = new PhoneService();

    useEffect(() => refreshPhones(), []);

    const refreshPhones = () => {
        phoneService.getAllPhones()
            .then(response => {
                const phones = response.data;
                setPhones(phones);
            })
            .catch(err => console.log(err))
    };

    function toggle(data) {
        setDetails(data);
    };


    return (
    
    <>
        <div className="phonelist">
            <Container>
                <Row>
                    {phones.map(elm => {
                        return (
                            <Col md={3}>
                                <PhoneCard key={elm.id} {...elm} toggle={toggle} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    </>
    );
    
};

export default Home;