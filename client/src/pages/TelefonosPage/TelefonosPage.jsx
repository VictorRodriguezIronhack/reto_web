import AllPhones from "../../components/AllPhones/AllPhones"
import { Container } from "react-bootstrap"

function PhonesPage(props) {

    return (
        <Container>
            <h2>Have a look at our phones catalogue</h2>
            <hr/>

            <AllPhones />

        </Container>
    )
}

export default PhonesPage