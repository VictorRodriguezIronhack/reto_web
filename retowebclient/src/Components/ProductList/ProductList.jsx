import { Row, Col } from 'react-bootstrap'
import ProductCard from '../ProductCard/ProductCard'



const ProductList = ({ products }) => {

    return (
        <Row>
            {products.map(product => {
                return <Col md={3} key={product._id}> <ProductCard {...product} /> </Col>
            })}
        </Row>
    )
}

export default ProductList