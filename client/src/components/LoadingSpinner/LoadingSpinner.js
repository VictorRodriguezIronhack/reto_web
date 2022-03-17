import { Spinner } from "react-bootstrap"

const LoadingSpinner = () => {

    return (
        <Spinner animation="border" role="status" style={{ marginLeft: "50%", marginTop: "20%" }}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}

export default LoadingSpinner