import { Link } from "react-router-dom";
import {
    Button,
    Card,
    CardBody,
    
} from "reactstrap";
import OpinionStars from "../opinions/OpinionStars";


const PhoneItem = ({ phone, onAdd }) => {
    return (
        <Card className="card card-lift--hover rounded mb-3 bg-secondary shadow border-0 m-auto" style={{ width: "18rem", maxHeight: "40rem" }}>
            <div className="card-img-top phone-card">
                <Link to={`/telefonos/${phone.id}`}><img src={phone.imageFileName} style={{ width: "100%", maxHeight: "310px", height: "310px" }} alt={phone.name} /></Link>
                <h2 className="card-title display-4 mb-0 phone-manufacturer">{phone.manufacturer}</h2>
                <h3 className="heading mb-0 phone-name">{phone.name}</h3>
                <div className="phone-stars">
                    <OpinionStars isSimplified={true} phone={phone} />
                </div>
            </div>
            <CardBody className="car-body d-flex justify-content-between">
                <p className="my-auto">{phone.price} €</p>
                <Button className="btn-1 ml-1" color="info" size="sm" onClick={() => onAdd(phone)}>Add to Cart</Button>
            </CardBody>
        </Card>
    )
}

export default PhoneItem;
