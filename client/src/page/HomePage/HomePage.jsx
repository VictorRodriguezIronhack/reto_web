import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import telephoneService from "../../services/telephone.service"

const HomePage = () => {

    const [getPhone, setGetPhone] = useState([])

    useEffect(() => {
        telephoneService
            .getAllPhones()
            .then(({ data }) => setGetPhone(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {getPhone.map((eachPhone, idx) => {
                return (
                    <div key={idx} className="phone">
                        <p>{eachPhone.name}</p>
                        <p>{eachPhone.manufacturer}</p>
                        <p>€{eachPhone.price}</p>
                        <Link to={`/${eachPhone.id}`}>Detalles</Link>
                    </div>
                )
            })}
        </>
    )
}

export default HomePage