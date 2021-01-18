import './PhonesList.css'
import { Container, Row } from 'react-bootstrap'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


// COMPONENT
import PhoneCard from './PhoneCard'
import Loader from '../shared/Spinner/Loader'

//ACTIONS
import { getProducts as listProducts } from '../../redux/actions/productActions'

const PhonesList = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);


    return (
        <Container>
            <h1 className="list-title mt-5">Our Products</h1>
            <Row >
                {loading ? <Loader />
                    : error ? { error }
                        : products.map(elm =>
                            <PhoneCard key={elm._id} productId={elm._id}{...elm} />)
                }

            </Row>
        </Container>
    )
}

export default PhonesList