import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Phones(){
    const [phones, setPhones] = useState([]);
    const [busy, setBusy] = useState(true);

    useEffect(() =>{
        axios.get("http://localhost:3000/telefonos")
        .then(res => {
            setPhones(res.data);
            setBusy(false)
        })
    })

    if (busy) {
        return <img src="./images/spinner.gif" alt="spinner" />
    } else {
        return (
            <ul>
                {phones.map((phone) => {
                    return <li key={phone.id}><Link to={`/details/${phone.id}`}>{phone.name}</Link></li>
                })}
            </ul>
        );
    };
}

export default Phones;