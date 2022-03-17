import "./PhonesPage.css"
import {useState, useEffect} from "react"
import phonesService from "../../services/phones.service"
import { Link } from 'react-router-dom'
import {Row,Col} from "react-bootstrap"

import PhoneCard from "../../components/PhoneCard/PhoneCard"


function PhonesPage() {

    const [phones, setPhones] = useState([])

    useEffect(()=>{
       phonesService
            .getPhones() 
            .then(({data})=>{
                setPhones(data)
            })
    }, [])

    return (
        <>
            <Row>
                {
                    phones.map(phone => {
                        return (
                            <Col md={4} key={phone.id}>
                                <PhoneCard phone={phone}/>
                            </Col>                 
                        )
                    })
                }
            </Row>
            
        </>
    )
}

export default PhonesPage