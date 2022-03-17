import { Spinner } from "react-bootstrap"

const LoadingSpinner = () => {

    return (<>
        <h4>Esto puede tardar un poco...</h4>
        <Spinner animation="grow" variant="primary" />
    </>
    )
}
export default LoadingSpinner