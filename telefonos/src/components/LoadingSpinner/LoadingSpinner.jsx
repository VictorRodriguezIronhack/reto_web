import { Spinner } from "react-bootstrap"

const LoadingSpinner = () => {

    return (<>
        <h4>This might take a while...</h4>
        <Spinner animation="grow" variant="primary" />
    </>
    )
}
export default LoadingSpinner