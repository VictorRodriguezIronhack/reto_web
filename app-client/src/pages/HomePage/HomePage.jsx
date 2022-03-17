import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import PhoneList from "../../components/PhoneList/PhoneList"
import LoadingSpinner from "../../components/Spinner/Spinner"
import phonesService from "../../services/phone.services"


const HomePage = () => {

    const [phones, setPhones] = useState([])

    useEffect(() => {
        setTimeout(() => {
            loadPhones()
        }, 2000)

    }, [])

    const loadPhones = () => {
        phonesService
            .getAllPhones()
            .then(({ data }) => setPhones(data))
            .catch(err => console.log(err))
    }

    return (

        <Container>
            <h1>LISTADO DE MÓVILES</h1>
            {!phones.length ? <LoadingSpinner /> : <PhoneList phones={phones} />}

        </Container>

    )
}

export default HomePage