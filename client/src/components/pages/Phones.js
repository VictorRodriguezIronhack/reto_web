import React, { Component } from 'react'

import Modal from '../shared/Modal/Modal'
import Backdrop from '../shared/Backdrop/Backdrop'

import './Phones.css'

class PhonesPage extends Component {
  state = {
    creating: false
  }

  showModal = () => this.setState({ creating: true })

  cancelModal = () => this.setState({ creating: false })

  confirmModal = () => {
    this.setState({ creating: false })
  }

  render() {
    return (
      <>
        <div className='phones-control'>
          <p>Add your used phone!</p>
          <button className='btn' onClick={this.showModal}>Create Phone</button>
        </div>
        {this.state.creating && 
          <>
            <Backdrop />
            <Modal
              title='Add Phone'
              canCancel
              canConfirm
              onCancel={ this.cancelModal }
              onConfirm={ this.confirmModal }
            >
                <h3>Modal children</h3>
            </Modal>  
          </>
        }
      </>
    )
  }
}

export default PhonesPage