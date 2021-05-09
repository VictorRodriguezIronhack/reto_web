import { Fragment, useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import service from '../../services/phones-service';
import { AuthContext } from "../../contexts/AuthStore";
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import OpinionItem from "../opinions/OpinionItem";
import OpinionForm from "../opinions/OpinionForm";


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
    const { user } = useContext(AuthContext);
    const userWithOpinion = phone?.opinions?.find(opinion => opinion.owner.id === user.id);
    const phoneWithOpinion = phone?.opinions?.find(opinion => opinion)
    
    return (
        <Fragment>
            {loading && <div className="d-flex justify-content-center align-items-center"><img src="/loading.gif" alt="Loading..." /></div>}
            <Container>
                <Row className="mb-4">
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
                                <tr>
                                    <th scope="row">Price</th>
                                    <td>{phone.price} €</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
                {!userWithOpinion &&
                    <Fragment>
                        <hr />
                        <Row className="mb-4">
                            <Col lg="8">
                                <OpinionForm phone={phone} />
                            </Col>
                        </Row>
                    </Fragment>
                }
                <Row>
                    {phoneWithOpinion &&
                        <Col lg="12" className="mb-3">
                            <h3 className="heading-title text-warning">Users Opinions</h3>
                            <hr />
                        </Col>
                    }
                    <Col lg="10" className="mb-3">
                        {phone.opinions?.map((opinion, i) => (
                            <OpinionItem key={i} opinion={opinion} />
                        ))}
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default PhoneDetailsItem;
