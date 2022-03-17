import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PhoneCard from '../../components/PhoneCard/PhoneCard'
import telephonesServices from '../../services/telephones.services'
   

function IndexPage() {
    const [ phones, setPhones ] = useState([])

    const loadPhones = () =>{
        telephonesServices
            .getPhones()
            .then(({data}) => setPhones(data))
            .catch(err => console.log(err))
    }
    useEffect(() => { loadPhones() }, [])

    return ( 
        <main>
            <h1>Bienvenido al listado de teléfonos</h1>
            {
                phones.map(phone => {

                    return(
                        <article key={phone.id}>
                            <ul>
                         
                                <PhoneCard phone={phone} /> 
                            </ul>
                        </article>
                       
                    )
                })
            }
        </main>

     )
}

export default IndexPage