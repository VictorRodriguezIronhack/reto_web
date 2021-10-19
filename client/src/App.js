import './App.css';
import React, { useEffect, useState } from 'react'
import Navigation from "./components/Layout/Navigation/Navigation";
import Routes from './components/Routes/Index';
import AuthService from './services/auth.service';

const authService = new AuthService()

export default function App() {

  const [loggedUser, setloggedUser] = useState(undefined)

  useEffect(() => {
    fetchUser()
  }, [])

  const storeUser = (user) => setloggedUser(user)

  const fetchUser = () => {
    authService
      .isloggedin()
      .then(res => storeUser(res.data))
      .catch(err => storeUser(null))
  }
  return (
    <div>
      <Navigation storeUser={storeUser} loggedUser={loggedUser} fetchUser={fetchUser} />
      <Routes storeUser={storeUser} loggedUser={loggedUser} fetchUser={fetchUser} />
    </div>

  );
}

