import React from "react";
import { useState } from "react";

function Phone({ phone }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <h1>{phone.name}</h1>
      <button onClick={handleClick}>See Details</button>
      {isClicked ? (
        <div className="card">
          <h2>{phone.manufacturer}</h2>
          {/* Need to remove " " from name to show the pic */}
          <img src={`{../../../../${phone.imageFileName}`} alt={phone.name} />
          <p>
            Color: {phone.color}, ${phone.price}, Screen: {phone.screen},
            Processor: {phone.processor}, Ram: {phone.ram}
          </p>
        </div>
      ) : null}
    </>
  );
}

export default Phone;
