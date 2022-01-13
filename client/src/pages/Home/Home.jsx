import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
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
