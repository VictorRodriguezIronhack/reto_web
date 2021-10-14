import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <h1>Bienvenid@ a Mobile App</h1>
      <h3>Fasst App Ever</h3>

      <Link to="/telefonos">
        <Button>Phones</Button>
      </Link>
    </Container>
  )
}
