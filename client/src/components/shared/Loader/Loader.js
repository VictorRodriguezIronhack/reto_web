import { Spinner } from 'react-bootstrap'


const Loader = () => {
    return (
        <>
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
            Loading...
        </>
    )
}

export default Loader