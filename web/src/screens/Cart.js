
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartStore';
import service from '../services/users-service';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Button
} from 'reactstrap';


const Cart = () => {
    const { cart, onCartChange } = useContext(CartContext)
    const history = useHistory();
    
    const itemsPrice = cart?.reduce((a, b) => a + b.price * b.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 400 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    
    const handleSubmit = async () => {
        const purchase = {price: totalPrice, products: cart}
        await service.createPurchase(purchase)
        onCartChange([])
        history.push('/telefonos')
    }
    return (
        <main>
            <div className="position-relative">
                <section className="section section-lg section-shaped">
                    <div className="shape shape-style-2 shape-primary">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <Container className="shape-container d-flex align-items-center">
                        <div className="col px-0">
                            <Row className="align-items-center justify-content-center">
                                <Col className="text-center" lg="6">
                                    <h3 className="display-2 mb-0">
                                        Shopping Cart Details
                    </h3>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="separator separator-bottom separator-skew">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="fill-white"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </section>
                {cart.length === 0 &&
                <div className="container rounded mb-4 bg-secondary shadow border-0 p-3">
                    <h3 className="text-center">Your Cart is Empty!</h3>
                </div>
                }
                {cart.length !== 0 && 
                <div className="container">
                    <Row className="rounded mb-3 bg-secondary shadow border-0">
                        <Col lg="4">
                            {cart?.map((product, i) => (
                                <Card key={i} className="card rounded mb-3 bg-secondary shadow border-0" style={{ width: "14rem", maxHeight: "20rem" }}>
                                    <div className="card-img-top phone-card">
                                        <Link to={`/telefonos/${product.id}`}><img src={product.imageFileName} style={{ width: "100%", maxHeight: "200px", height: "230px" }} alt={product.name} /></Link>
                                        <h4 className="card-title display-5 mb-0 phone-manufacturer">{product.manufacturer}</h4>
                                        <h5 className="heading mb-0 phone-name">{product.name}</h5>
                                    </div>
                                    <CardBody className="car-body d-flex justify-content-between">
                                        <p className="my-auto">{product.price} €</p>
                                    </CardBody>
                                </Card>
                            ))}
                        </Col>
                        <Col lg="8">
                            <div className="rounded m-3 bg-secondary shadow border-0 p-3 w-75">
                                <div className="row">
                                    <div className="col-lg-6">Items Price</div>
                                    <div className="col-lg-6 text-center">{itemsPrice?.toFixed(2)} €</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">Tax Price</div>
                                    <div className="col-lg-6 text-center">{taxPrice?.toFixed(2)} €</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">Shipping Price</div>
                                    <div className="col-lg-6 text-center">{shippingPrice?.toFixed(2)} €</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6"><strong>Total Price</strong></div>
                                    <div className="col-lg-6 text-center"><strong>{totalPrice?.toFixed(2)} €</strong></div>
                                </div>
                                <Button
                                    className="btn-icon mb-3 mt-3 mb-sm-0"
                                    color="success"
                                    onClick={() => handleSubmit()}
                                >
                                    <span className="btn-inner--icon m-1">
                                        <i className="ni ni-cart" />
                                    </span>
                                    <span className="btn-inner--text">Purchase</span>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                }
            </div>
        </main>
    )
}

export default Cart;