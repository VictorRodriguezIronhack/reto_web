import PhonesCard from "../../components/PhonesCard/PhonesCard"
import { Row, Col } from "react-bootstrap"
import "./PhonesList.css"
import LoadingSpinner from "./../../components/LoadingSpinner/LoadingSpinner"

function PhonesList({phonesData}) {

    return (
        <>
            <h1>Lista de Teléfonos</h1>

            <div className="phones">
                    {
                        !phonesData.length ?

                        <LoadingSpinner/>

                        :

                        <Row>
                        { phonesData.map((phones) => <Col md={4} key={phones.id}> <PhonesCard phones={phones} /> </Col>) }
                        </Row>
                    }

            </div>
        </>
    )
}

export default PhonesList