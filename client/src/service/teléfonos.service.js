import axios from 'axios'

export default class PhoneService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/phones',
            withCredentials: true
        })
    }

    getPhones = () => this.apiHandler.get(`/phones`)
    getPhone = phone_Id => this.apiHandler.get(`/onePhone/${phone_Id}`)
    editPhone = phone_Id => this.apiHandler.patch(`/editPhone/${phone_Id}`)
    deletePhone = phone_Id => this.apiHandler.delete(`/deletePhone/${phone_Id}`)
}