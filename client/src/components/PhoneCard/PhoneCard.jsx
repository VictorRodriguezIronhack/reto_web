import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const PhoneCard = ({ phone }) => {
  return (
    <Link
      className="text-decoration-none text-dark"
      to={`/phone/${phone.id}`}
      state={{ phone: phone }}
    >
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={require(`../../assets/images/${phone.imageFileName}`)}
        />
        <Card.Body>
          <Card.Title className="text-truncate">{phone.name}</Card.Title>
          <Card.Subtitle className="text-truncate">
            {phone.manufacturer}
          </Card.Subtitle>
          <Card.Subtitle className="text-truncate">
            {phone.price} €
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default PhoneCard;
