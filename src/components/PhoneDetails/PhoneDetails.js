import React from "react";
import { useState, useEffect } from "react";

const PhoneDetails = (props) => {
  const [phones, setPhones] = useState({
    id: "",
    name: ""

  });
  
  console.log(phones);
  useEffect(() => {
      const foundPhone = props.phones.filter((phoneObj) => {
          console.log('-----', phoneObj.id)
          return phoneObj.id === props.match.params.id;
        })
        

    if (foundPhone) setPhones(foundPhone[0]);
    console.log('props', props)
    console.log('foundPhone', foundPhone[0])
    
}, [props.phones, props.match.params.id]);


  return (

    <div className="container ">
      <h1>Phone Detail</h1>
        {phones && <p>{phones.name}</p>}

   {/*    <div key={phones.id} className="row ">
        <img src={phones.imageFileName} alt={phones.name} />
      </div> */}
    </div>
 
  );

};

export default PhoneDetails;
