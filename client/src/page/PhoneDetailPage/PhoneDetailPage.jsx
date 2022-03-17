import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PhoneDetail from "../../components/PhoneDetail/PhoneDetail"
import telephoneService from "../../services/telephone.service"

const PhoneDetailPage = () => {

    const [onePhone, setOnePhone] = useState({})
    const { id } = useParams()

    useEffect(() => {
        telephoneService
            .getAllPhones()
            .then(({ data }) => {
                const filt = data.filter(elm => elm.id == id)
                setOnePhone(...filt)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <>
            <PhoneDetail onePhone={onePhone} />
        </>
    )
}

export default PhoneDetailPage