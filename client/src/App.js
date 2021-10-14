import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import PhoneCard from "./components/PhoneCard";

function App() {
  const [phones, setPhones] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [phonePopup, setPhonePopup] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5005/telefonos").then((result) => {
      console.log("result:", result.data);
      setPhones(result.data);
    });
  }, []);

  const toggleShowPopup = (e) => {
    let phoneSelected = phones.filter((phone) => {
      return phone.id === e;
    });
    console.log(phoneSelected);
    setPhonePopup(phoneSelected);
    setShowPopup(true);
  };

  const toggleClosePopup = () => {
    setShowPopup(false);
  }

  return (
    <div className="App">
      {showPopup && (
        <div className="popup-back">
          <div className="popup">
            <img
              src={phonePopup[0].imageFileName}
              alt={phonePopup[0].name}
              className="phone-popup-image"
            />
            <div>
              <h1>{phonePopup[0].name}</h1>
              <h2>{phonePopup[0].manufacturer}</h2>
              <p>Screen:{phonePopup[0].screen}</p>
              <p>Processor:{phonePopup[0].processor}</p>
              <p>Ram:{phonePopup[0].ram}</p>
              <h3>{phonePopup[0].price}€</h3>
            </div>
            <button onClick={toggleClosePopup}>X</button>
          </div>
        </div>
      )}
      <dib className="phones-container">
        {phones.map((result, index) => {
          return (
            <PhoneCard phone={result} key={index} event={toggleShowPopup} />
          );
        })}
      </dib>
    </div>
  );
}

export default App;
