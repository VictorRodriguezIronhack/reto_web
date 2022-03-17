import "./PhoneDetailsPage.css"
import {useLocation} from "react-router-dom"
import {useState} from "react"

function PhoneDetailsPage() {

    const {state} = useLocation()

    const [phone, setPhone] = useState(state.phone)

    return (
        <>  
                <ul>
                    <li>{phone.id}</li>
                    <li>{phone.name}</li>
                    <li>{phone.manufacturer}</li>
                </ul>    
        </>
    )
}

export default PhoneDetailsPage