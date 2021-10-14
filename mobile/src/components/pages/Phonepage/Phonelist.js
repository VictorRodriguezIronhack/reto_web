import React, { Component } from 'react'
import { Row, Spinner } from 'react-bootstrap'
import { phoneList } from "../../../phones";
import PhoneItem from './PhoneItem'



export default class PhoneList extends Component {
  constructor() {
    super();

    this.state = {
      phones: phoneList,
    }
   
  }


  displayPhones = () => {
    return (
        phoneList.map((phone, idx) => {
          return (
            <PhoneItem
              {...phone}
              key={`${idx}-${phone.name}`}
            />
          )
        })
      )
    }

  

 
  render() {
    return (
      this.state.phones ?
        <div>

          <Row className="mt-4 phone-list">
            {
              this.displayPhones()
            }
          </Row>
        </div>
        :
        <Spinner animation="grow" variant="dark" />
    )
  }
}
