import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-home">
      <h1>
        Welcome to <span className="title-home">THE PHONE CAVE</span>
      </h1>
      <h2>Do you want know the Phone List?</h2>
      <button className="button-details">
        <a href="/allphones"> PHONES</a>
      </button>
    </div>
  );
};

export default Home;
