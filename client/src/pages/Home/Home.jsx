import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import PhonesContainer from "../../components/PhonesContainer/PhonesContainer";
import { getPhones } from "../../services/phones";
import Phone from "../Phone/Phone";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    getPhones()
      .then((response) => {
        setPhones(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <Container>
      {isLoading && (
        <div className="mt-5">
          <Spinner animation="border"></Spinner>
        </div>
      )}
      {!isLoading && (
        <>
          <PhonesContainer phones={phones} />
          {/* <Phone phone={phones[0]} /> */}
        </>
      )}
    </Container>
  );
};

export default Home;
