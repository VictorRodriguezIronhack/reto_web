import React from 'react'
import {image,Card,Button} from "react-bootstrap"

function PhoneCard( props) {
    props.openModal()
    props.setPhoneToShow({...props})
  return (
    <div>PhoneCard</div>
  )
}
export default PhoneCard