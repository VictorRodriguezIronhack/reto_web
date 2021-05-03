


const PhoneItem = ({ phone }) => {
    return (
        <div className="card" style={{ width: "18rem", maxHeight: "30rem"}}>
            <img src={phone.imageFileName} style={{width: "100%", maxHeight: "300px"}} className="card-img-top" alt={phone.name} />
            <div className="card-body">
                <h5 className="card-title">{phone.name}</h5>
                <p className="card-text">{phone.color}</p>
            </div>
        </div>
    )
}

export default PhoneItem;
