import Navbar from "./components/layout/navbar";
import { Component } from "react";
import "./App.css";
import PhoneDetails from "./components/pages/PhoneDetails";

class App extends Component {
  render = () => {
    return (
      <>
        <Navbar />
        <PhoneDetails />
      </>
    );
  };
}

export default App;
