import React, { Component } from 'react';
import PhoneService from '../../services/phone.service';
import PhoneItem from '../../components/PhoneItem/PhoneItem';

export default class PhoneList extends Component {
  state = {
    phones: [],
    isLoading: true,
  };

  phoneService = new PhoneService();

  componentDidMount() {
    this.phoneService
      .get()
      .then((response) => this.setState({ phones: response.data, isLoading: false }))
      .catch((err) => console.error(err));
  }

  displayPhones() {
    const { phones, isLoading } = this.state;

    if (!isLoading) {
      return phones.map((phone) => {
        console.log(phone);
        return <PhoneItem key={phone.id} {...phone} />;
      });
    } else {
      return (
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'></span>
        </div>
      );
    }   
  }

  render() {
    return <div>{this.displayPhones()}</div>;
  }
}
