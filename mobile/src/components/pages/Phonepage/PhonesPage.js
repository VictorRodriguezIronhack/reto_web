import React from 'react'
import { Container } from 'react-bootstrap'
import Phonelist from './Phonelist'

export default function PhonePage() {
  return (
    <Container>
      <h1>Phone List</h1>

      <Phonelist/>
    </Container>
  )
}
