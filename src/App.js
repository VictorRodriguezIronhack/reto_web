import "./App.css";
import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import phonesData from "./phones.json";
import { Switch, Route } from "react-router-dom";
import PhonesList from "./components/PhonesList/PhonesList";
import PhoneDetails from "./components/PhoneDetails/PhoneDetails";

function App() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    setPhones(phonesData);
  }, []);

  return (
    <div className="App">
      <Layout>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={(routeProps) => (
                <PhonesList phones={phones} {...routeProps} />
              )}
            />
            <Route
              exact
              path="/phones/:id"
              render={(routeProps) => {
                return <PhoneDetails {...routeProps} phones={phones} />;
              }}
            />
          </Switch>
        </div>
      </Layout>
    </div>
  );
}

export default App;
