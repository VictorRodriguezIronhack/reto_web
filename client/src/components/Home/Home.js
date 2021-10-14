import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <h1 className="mt-5">Bienvenid@!</h1>

      <Link to="/telèfonos">
        <Button className="rounded-pill mt-5">Ver telèfonos</Button>
      </Link>
    </Container>
  );
}

export default Home
