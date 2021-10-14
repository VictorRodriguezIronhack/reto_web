import { useEffect, useState } from "react";
import axios from "axios";
import phoneData from "./../../phones.json"
import { Button, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";


const Phones = () => {

  // ----------------------------------------------------
  // I was trying to get the phones data with axios, without the server, as shown below.
  //  Switching now to client/server, but I won't make it for 1PM (CEST) as requested.
  // ----------------------------------------------------

    // WITHOUT SERVER --------------------------
      const [phones, setPhones] = useState('')

      console.log(phoneData)

      const fetchPhones = () => {

          return axios
            .get(phoneData)
            .then((data) => {
              console.log(data)
              setPhones(data)
            })
            .catch((err) => console.log(err));

      }

      useEffect(() => {

          fetchPhones()

      }, []);
    // ----------------------------------

  return (
    <>
      <Container>
        <Link to="/">
          <Button className="rounded-pill mt-5">Back to HomePage</Button>
        </Link>
      </Container>

      {phones ? (
        <p>{phones}</p>
      ) : (
        <Spinner className="mt-5" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default Phones;
