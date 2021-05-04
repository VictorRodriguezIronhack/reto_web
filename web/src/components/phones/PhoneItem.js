import { Link } from "react-router-dom";



const PhoneItem = ({ phone }) => {
    return (
        <div className="card" style={{ width: "18rem", maxHeight: "30rem"}}>
            <Link to={`/telefonos/${phone.id}`}><img src={phone.imageFileName} style={{width: "100%", maxHeight: "280px"}} className="card-img-top" alt={phone.name} /></Link>
            <div className="card-body">
                <h5 className="card-title">{phone.name}</h5>
                <p className="card-text">{phone.color}</p>
            </div>
        </div>
    )
}

export default PhoneItem;
