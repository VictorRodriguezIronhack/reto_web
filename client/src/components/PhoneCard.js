function PhoneCard(props) {
  

  const { phone } = props;
  return (
      <div className="phone-card">
        <img
          src={phone.imageFileName}
          alt={phone.name}
          className="phone-image"
        />
        <h1>{phone.name}</h1>
        <h2>{phone.price}€</h2>
        <button onClick={()=>{props.event(phone.id)}}>View Details</button>
      </div>
  );
}

export default PhoneCard;
