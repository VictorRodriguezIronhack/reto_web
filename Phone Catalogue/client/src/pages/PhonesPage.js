import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Phone from "../components/Phone";
import ColorComponent from "../components/Categories/ColorComponent";
import RamComponent from "../components/Categories/RamComponent";
import ProcessorComponent from "../components/Categories/ProcessorComponent";

function Phones() {
  const [phoneList, setPhoneList] = useState([]);
  const [shownPhoneList, setShownPhoneList] = useState([])
  // Filter by specefications
  const allColors = ["All", ...new Set(phoneList.map((phone)=> phone.color))]
  const allRams = ["All", ...new Set(phoneList.map((phone)=>phone.ram))]
  const allProcessors = ["All", ...new Set(phoneList.map((phone)=> phone.processor))]
  const [processor, setProcessor] = useState(allProcessors)
  const [ram, setRam] = useState(allRams)
  const [colors, setColors] = useState(allColors)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPhoneData = () => {
      axios
        .get("http://localhost:5005/api/phones")
        .then((res) => {
          console.log("res.data", res.data);
          //It won't save the res.data as phoneList on the first loading of the page, I got stucked here.
          console.log("PhoneList", phoneList);

          setIsLoading(false);
          setPhoneList(res.data)
          setShownPhoneList(res.data);
        })
        .catch((err) => console.log(err));
    };
    getPhoneData();
  }, []);

  const filterItemsByColor = (color) => {
    if (color === "All") {
      setShownPhoneList(phoneList);
      return;
    }
    const newColor = phoneList.filter((phone) => phone.color === color);
    setShownPhoneList(newColor);
  };
  const filterItemsByProcessor = (processor) => {
    if (processor === "All") {
      setShownPhoneList(phoneList);
      return;
    }
    const newProcessor = phoneList.filter((phone) => phone.processor === processor);
    setShownPhoneList(newProcessor);
  };

  const filterItemsByRam = (ram) => {
    if (ram === "All") {
      setShownPhoneList(phoneList);
      return;
    }
    const newRam = phoneList.filter((phone) => phone.ram === ram);
    setShownPhoneList(newRam);
  };

  return (
    <div className="container">
      {shownPhoneList?.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
          
          <div className="row">
            {/* <div className="info"> */}
            <h2>Our Stock</h2><p>Check your favorite model's details</p>
            <div className="espec col-2 bg-light shadow">
              <ColorComponent allColors={allColors} filterItemsByColor={filterItemsByColor} />
              <RamComponent allRams={allRams} filterItemsByRam={filterItemsByRam} />
              <ProcessorComponent allProcessors={allProcessors} filterItemsByProcessor={filterItemsByProcessor} />
            </div>
            <div className="col-9 px-5">
              {shownPhoneList?.map((phone) => (
                <>
                  <Phone phone={phone} />
                </>
              ))}
            </div>
         </div>
            
      )}
    </div>
  );
}

export default Phones;
