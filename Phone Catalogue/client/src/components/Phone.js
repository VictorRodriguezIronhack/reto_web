import React from "react";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Phone({ phone }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <article className={isClicked ? "question2" : "question"}>
        {!isClicked ? (
          <>
            <img
              src={phone.imageFileName}
              alt={phone.name}
              style={{ width: "150px" }}
            />
            <h3>{phone.name}</h3>
            <button className="btn" onClick={handleClick}>
              {isClicked ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </>
        ) : null}
        {isClicked ? (
          <div id="details" className="ModalOpen">
            <img
              src={phone.imageFileName}
              alt={phone.name}
              style={{ width: "300px" }}
            />
            <ul>
              <h3>{phone.name}</h3>
              <p>{phone.manufacturer}</p>
              <li>color: {phone.color}</li>
              <li>${phone.price}</li>
              <li>Display: {phone.screen}</li>
              <li>Processor: {phone.processor}</li>
              <li>Ram: {phone.ram}</li>
            </ul>
              <button className="btn" onClick={handleClick}>
                {isClicked ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
          </div>
        ) : null}
      </article>{" "}
    </>
  );
}

export default Phone;
