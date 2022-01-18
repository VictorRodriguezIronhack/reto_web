import React, { useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import PhoneCard from './PhoneCard'
import './PhoneList.css'

function PhoneList(props) {

    return (
        <div>
            <Row>
                {props.phones.map(elm => {
                    return (
                        <Col key={elm.id}>
                            <PhoneCard  {...elm} />
                        </Col>
                    )
                })
                }
            </Row>
        </div>
    )
}

export default PhoneList