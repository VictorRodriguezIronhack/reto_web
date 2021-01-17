import './PhoneDetails.css'
import { Row, Col, Container, Image, Card, Button, Form, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Loader from '../shared/Spinner/Loader'

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

//ACTIONS
import { getProductDetails } from '../../redux/actions/productActions'
import { addToCart } from '../../redux/actions/cartActions'

const PhoneDetails = ({ match, history }) => {

    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.getProductDetails)
    const { loading, error, product } = productDetails


    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, match, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push(`/cart`);
    };

    return (

        <Container className="mt-5">

            {loading ? <Loader />
                : error ?
                    <h2 >{error}</h2>
                    :
                    <>
                        <h2 className="phone-name"></h2>
                        <Row className="d-flex align-items-center">
                            <Col md={3} >
                                <Image src={product.imageFileName} alt={product.name} />
                            </Col>
                            <Col md={6}>
                                <h3 className="phone-manifacturer mb-3"><strong>{product.manufacturer} {product.name}</strong></h3>
                                <p>{product.description}</p>
                                <p className="phone-color"><strong>Color:</strong> {product.color}</p>
                                <p className="phone-price"><strong>Price:</strong> {product.price} €</p>
                                <p className="phone-screen"><strong>Screen:</strong> {product.screen}</p>
                                <p className="phone-processor"><strong>Processor:</strong> {product.processor}</p>
                                <p className="phone-ram"><strong>RAM:</strong> {product.ram}</p>
                            </Col>
                            <Col md={3}>

                                <Card>
                                    <Card.Header>Shop this product</Card.Header>
                                    <ListGroup.Item>Price: {product.price} €</ListGroup.Item>
                                    <ListGroup.Item>Stock:
                                        {product.stock > 0 ? " In Stock" : "Out of Stock"}
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex ">
                                        <p className="mr-3 my-auto">Quantity</p>
                                        <Form.Control as="select" defaultValue="Choose..." value={qty} onChange={e => setQty(e.target.value)}>
                                            {[...Array(product.stock).keys()].map(elm => (
                                                <option key={elm + 1} value={elm + 1}>
                                                    {elm + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-center">
                                        <Button className="amount-btn btn" variant="secondary" size="sm" onClick={addToCartHandler}> Add To Cart</Button>
                                    </ListGroup.Item>

                                </Card>

                            </Col>
                        </Row>
                    </>
            }

            <Row className="mt-5">
                <Col>
                    <Link style={{ color: '#3f3f3f' }} className="btn btn-outline-secondary" to="/">Go back</Link>
                </Col>
            </Row >

        </Container >
    )
}

export default PhoneDetails


