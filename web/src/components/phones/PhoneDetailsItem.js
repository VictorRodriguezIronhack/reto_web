import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import service from '../../services/phones-service';
import {
    Container,
    Row,
    Col
} from 'reactstrap';


const PhoneDetailsItem = () => {

    const params = useParams();

    const [state, setState] = useState({
        phone: "",
        loading: false
    })
    useEffect(() => {
        async function fetchPhone() {
            setState(state => ({
                ...state,
                loading: true
            }))
            const phone = await service.get(params.id)

            if (!isUnmounted) {
                setState({
                    phone: phone,
                    loading: false
                })
            }
        }
        let isUnmounted = false
        fetchPhone();
        return () => {
            isUnmounted = true;
        }
    }, [params])

    const { phone, loading } = state;
    return (
        <Fragment>
            {loading && <div className="d-flex justify-content-center align-items-center"><img src="/loading.gif" alt="Loading..." /></div>}
            <Container>
                <Row>
                    <Col lg="5">
                        <img src={`/${phone?.imageFileName}`} style={{ width: "100%" }} className="card-img-top" alt={phone?.name} />
                    </Col>
                    <Col lg="7">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">{phone?.name}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Manufacturer</th>
                                    <td>{phone.manufacturer}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Description</th>
                                    <td>{phone.description}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Color</th>
                                    <td>{phone.color}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Screen</th>
                                    <td>{phone.screen}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Processor</th>
                                    <td>{phone.processor}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Ram</th>
                                    <td>{phone.ram}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default PhoneDetailsItem;
