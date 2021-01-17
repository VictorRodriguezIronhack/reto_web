import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <Spinner animation="border" role="status" className="loader" style={{ margin: '50px'}}>
            <span className="sr-only">Loading...</span>
        </Spinner>
    )
}

export default Loader