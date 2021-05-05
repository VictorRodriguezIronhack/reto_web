import { Link } from "react-router-dom";
import OpinionStars from "../opinions/OpinionStars";


const PhoneItem = ({ phone }) => {
    return (
        <div className="card card-lift--hover rounded mb-3 bg-secondary shadow border-0" style={{ width: "18rem", maxHeight: "40rem" }}>
            <div className="card-img-top phone-card">
                <Link to={`/telefonos/${phone.id}`}><img src={phone.imageFileName} style={{ width: "100%", maxHeight: "310px", height: "310px" }} alt={phone.name} /></Link>
                <h2 className="card-title display-4 mb-0 phone-manufacturer">{phone.manufacturer}</h2>
                <h3 className="heading mb-0 phone-name">{phone.name}</h3>
                <div className="phone-stars">
                    <OpinionStars isSimplified={true} phone={phone} />
                </div>
            </div>
        </div>
    )
}

export default PhoneItem;
