import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ name, imageUrl, _id }) => {
    return (
        <Card className='productCard'>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Link to={`/detalles/${_id}`}>
                    <div className="d-grid gap-2">
                        <Button variant="dark">Ver detalles</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card >
    )
}

export default ProductCard