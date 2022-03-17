import "./PhoneDetailsPage.css"
import {useLocation} from "react-router-dom"
import {useState} from "react"
import PhoneDetailsCard from "../../components/PhoneDetailsCard/PhoneDetailsCard"

function PhoneDetailsPage() {

    const {state} = useLocation()

    const [phone, setPhone] = useState(state.phone)

    return (
        <>
            <h1>Phone Details</h1>
                <PhoneDetailsCard phone={phone}/>
        </>
    )
}

export default PhoneDetailsPage