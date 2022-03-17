import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useParams, Link } from "react-router-dom"
import productsService from "../../Services/product.service"


const ProductDetailsPage = () => {
    const [productDetails, setProductDetails] = useState({})
    const { product_id } = useParams()

    useEffect(() => {
        productsService
            .getOneProduct(product_id)
            .then(({ data }) => setProductDetails(data))
            .catch(err => console.log(err))
    }, [])


    return (
        <Container>
            <h2>Detalles de {productDetails.name}</h2>
            <hr />
            <Row>
                <Col md={{ span: 4, offset: 1 }}>
                    <h3>Información</h3>
                    <p>Precio: {productDetails.price} €</p>
                    <p>Descripción: {productDetails.description}</p>
                    <br />
                    <h3>Especificaciones</h3>
                    <p>Marca: {productDetails.manufacturer}</p>
                    <p>Color: {productDetails.color}</p>
                    <p>Pantalla:  {productDetails.screen}</p>
                    <p>Procesador: {productDetails.processor}</p>
                    <p>Ram: {productDetails.ram}</p>

                </Col>
                <Col md={6}>
                    <img style={{ width: '100%' }} src={productDetails.imageUrl} alt={productDetails.title} />
                </Col>
                <Link to="/">
                    <Button variant="dark">Volver</Button>
                </Link>
            </Row>

        </Container>
    )
}

export default ProductDetailsPage