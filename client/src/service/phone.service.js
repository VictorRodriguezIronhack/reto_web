import axios from 'axios'

export default class PhoneService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/phones',
        })
    }

    getPhones = () => this.apiHandler.get('/getAllPhones')
    getPhone = phoneId => this.apiHandler.get(`/getOnePhone/${phoneId}`)
    savePhone = phoneInfo => this.apiHandler.post('/newPhone/', phoneInfo)
    editPhone = (phoneId, phone) => this.apiHandler.put(`/editPhone/${phoneId}`, phone)
    deletePhone = phoneId => this.apiHandler.delete(`/deletePhone/${phoneId}`)

}