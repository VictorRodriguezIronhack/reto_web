import { useState } from "react"



const NewPhoneForm = () => {

    const [phoneData, setPhoneData] = useState({
        id: '',
        name: '',
        manufacturer: '',
        description: '',
        color: '',
        price: 0,
        imageFileName: '',
        screen: '',
        processor: '',
        ram: 0
    })

    return (
        <div>

            NewPhoneForm

        </div>
    )
}

export default NewPhoneForm