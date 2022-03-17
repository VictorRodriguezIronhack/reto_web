import { Container, Spinner } from 'react-bootstrap'
import './Spinner.css'

const LoadingSpinner = () => {

    return (
        <Container className='spinner'>
            <Spinner animation="border" />
            <span>Cargando...</span>
        </Container>
    )
}

export default LoadingSpinner