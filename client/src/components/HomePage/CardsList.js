import { useEffect, useState } from 'react'
import mobileService from '../../services/phones.service'

import Cards from "../Cards/Cards"



const CardList = () => {

    const mobileservice = new mobileService

    const [result, setResult] = useState([])

    useEffect(() => {
        mobileservice.mobileList().then((res) => {
            setResult(res.data);
        });
    }, []);

    return (
        <>
            {result.length < 1
                ?
                <h3>Loading...</h3>
                : <div className="container">
                    <div className="card-list">
                        <Cards phones={result} />
                    </div>
                </div>}
        </>
    )

}
export default CardList