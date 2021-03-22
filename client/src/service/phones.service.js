import axios from 'axios'

class PhoneService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/phones`,
            withCredentials: true
        })
    }

    getPhones = () => this.api.get('/allPhones')
    getPhone = phoneId => this.api.get(`/onePhone/${phoneId}`)
    savePhone = (phoneDetails) => this.api.post('/newPhone', phoneDetails)
    editPhone = (phoneId, phoneDetails) => this.api.put(`/editPhone/${phoneId}`, phoneDetails)
    deletePhone = (phoneId) => this.api.delete(`/deletePhone/${phoneId}`)
}

export default PhoneService


