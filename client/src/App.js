import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';
import AuthServices from './services/auth.service'
import { Container, Row, Col } from 'react-bootstrap'
import PhonesList from './components/PhonesList'
import Header from './components/Header'
import Login from './components/Login'
import WishList from './components/WishList'

function App() {

  const [user, setUser] = useState(undefined)

  useEffect(() => {

    const checkUser = async () => {

      try {

        const authServices = new AuthServices()
        const loggedUser = await authServices.isLoggedIn()
        setUser(loggedUser.data)
        console.log(loggedUser.data)

      } catch (error) {
        setUser(undefined)
        console.log(error.response.data.message)
      }
    }

    checkUser()
  }, [])



  return (
    <Container>
      <Header title='Reto Web' />
      <Row>
        <Col md={6}>
          <PhonesList loggedUser={user} />
        </Col>
        <Col md={6}>
          {user ?
            <WishList setUser={setUser} loggedUser={user} />
            :
            <Login setUser={setUser} />
          }
        </Col>
      </Row>
    </Container>
  );
}

export default App;
