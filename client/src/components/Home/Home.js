import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <h1 className="mt-5">Bienvenid@!</h1>

      <Link to="/telefonos">
        <Button className="rounded-pill mt-5">Ver teléfonos</Button>
      </Link>
    </Container>
  );
}

export default Home
