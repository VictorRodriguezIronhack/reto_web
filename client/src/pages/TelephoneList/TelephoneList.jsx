import { React, useEffect, useState } from "react";
import telephoneService from "../../services/telephones.services"
import { Container } from "react-bootstrap";



function TelephoneList() {

    const [telephone, setTelephone] = useState([]);

     const loadTelephones = () => {
        telephoneService
            .getTelephones()
            .then(({data}) => setTelephone(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
       loadTelephones()
    }, [])


    return (
      <>
        {
            telephone?.map((phone) => (
          <p key={phone._id} phone={phone} />
        ))
        }
      </>
    );
}

export default TelephoneList