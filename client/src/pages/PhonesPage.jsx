import { useState, useEffect } from "react"
import PhoneCard from "../components/PhoneCard"
import phoneService from "../services/phones.service"


function PhonesPage() {

    const [phones, setPhones] = useState([])

    useEffect(() => {
        phoneService
            .getAllPhones()
            .then(response => setPhones(response.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <h1>PhonesPage</h1>
            {
                phones.map(elm => {
                    return (
                        <div key={elm.id}>
                            <PhoneCard phone={elm} />
                        </div>
                    )
                })
            }
        </div >
    )
}

export default PhonesPage