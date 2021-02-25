import React, { Component } from 'react'

import Modal from '../shared/Modal/Modal'
import Backdrop from '../shared/Backdrop/Backdrop'
import AuthContext from '../context/auth-context'

import './Phones.css'

class PhonesPage extends Component {
  state = {
    creating: false,
    phones: []
  }

  static contextType = AuthContext

  constructor (props) {
    super(props)
      this.nameRef = React.createRef() 
      this.manufacturerRef = React.createRef() 
      this.descriptionRef = React.createRef() 
      this.colorRef = React.createRef() 
      this.priceRef = React.createRef() 
      this.imageFileNameRef = React.createRef() 
      this.screenRef = React.createRef() 
      this.processorRef = React.createRef() 
      this.ramRef = React.createRef() 
      this.dateRef = React.createRef() 
  }

  componentDidMount = () => this.fetchPhones()

  showModal = () => this.setState({ creating: true })

  cancelModal = () => this.setState({ creating: false })

  confirmModal = () => {
    this.setState({ creating: false })

    const name = this.nameRef.current.value
    const manufacturer = this.manufacturerRef.current.value
    const description = this.descriptionRef.current.value
    const color = this.colorRef.current.value
    const price = +this.priceRef.current.value
    const imageURL = this.imageFileNameRef.current.value
    const screen = this.screenRef.current.value
    const processor = this.processorRef.current.value
    const ram = +this.ramRef.current.value
    const date = this.dateRef.current.value

    if (name.trim().length === 0 || description.trim().length === 0) {
      return
    }

    const phone = {
      name,
      manufacturer,
      description,
      color,
      price,
      imageURL,
      screen,
      processor,
      ram,
      date
    }

    const requestBody = {
      query: `
      mutation {
        createPhone(phoneInput: {
          name: "${ name }", 
          manufacturer: "${ manufacturer }", 
          description: "${ description }", 
          color: "${ color }", 
          price: ${ price }, 
          imageFileName: "${ imageURL }", 
          screen: "${ screen }", 
          processor: "${ processor }", 
          ram: ${ ram },
          date: "${ date }"
        }) {
          _id
          name
          manufacturer
          description
          color
          price
          imageFileName
          screen
          processor
          ram
          date
          creator {
            _id
            email
          }
        }
      }
      `
    }

    const token = this.context.token

    fetch('http://localhost:5000/api', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }).then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed!')
      }
      return res.json()
    })
      .then(resData => {
        this.fetchPhones()
      })
      .catch(err => {
      console.log(err)
    })
  }

  fetchPhones = () => {
    const requestBody = {
      query: `
      query {
        phones {
          _id
          name
          manufacturer
          description
          color
          price
          imageFileName
          screen
          processor
          ram
          date
          creator {
            _id
            email
          }
        }
      }
      `
    }

    fetch('http://localhost:5000/api', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed!')
      }
      return res.json()
    })
      .then(resData => {
        const phones = resData.data.phones
        this.setState({ phones: phones })
      })
      .catch(err => {
      console.log(err)
    })
  }

  render() {

    const phoneList = this.state.phones.map(phone => {
      return <li key={phone._id} className='phones__list-item'>{ phone.name }</li>
    })

    return (
      <>
        {this.context.token &&
          <div className='phones-control'>
            <p>Add your used phone!</p>
            <button className='btn' onClick={this.showModal}>Create Phone</button>
          </div>}
        
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
              <form>
                <div className='form-control'>
                  <label htmlFor='name'>Name</label>
                  <input id='name' type='text' ref={ this.nameRef } />
                </div>
                
                <div className='form-control'>
                  <label htmlFor='manufacturer'>Manufacturer</label>
                <input id='manufacturer' type='text' ref={ this.manufacturerRef } />
                </div>
                
                <div className='form-control'>
                  <label htmlFor='description'>Description</label>
                  <textarea id='description' rows='4' ref={ this.descriptionRef } />
                </div>
                
                <div className='form-control'>
                  <label htmlFor='color'>Color</label>
                  <input id='color' type='text' ref={ this.colorRef } />
                </div>
                
                <div className='form-control'>
                  <label htmlFor='price'>Price</label>
                  <input id='price' type='number' ref={ this.priceRef } min='0' />
                </div>
                
                <div className='form-control'>
                  <label htmlFor='imageFileName'>Image URL</label>
                  <input id='imageFileName' type='text' ref={ this.imageFileNameRef } />
                </div>
                
                <div className='form-control'>
                  <label htmlFor='screen'>Screen size</label>
                  <input id='screen' type='text' ref={ this.screenRef } />
                </div>
                
                <div className='form-control'>
                  <label htmlFor='processor'>Processor</label>
                  <input id='processor' type='text' ref={ this.processorRef } />
                </div>
                
                <div className='form-control'>
                  <label htmlFor='ram'>Ram</label>
                  <input id='ram' type='number' ref={ this.ramRef } min='0' />
                </div>
                
                <div className='form-control'>
                  <label htmlFor='date'>Date</label>
                  <input id='date' type='datetime-local' ref={ this.dateRef } />
                </div>
              
              </form>
            </Modal>  
          </>
        }

        <section className='phones__list'>
          <ul>
            {phoneList}
          </ul>
        </section>

      </>
    )
  }
}

export default PhonesPage