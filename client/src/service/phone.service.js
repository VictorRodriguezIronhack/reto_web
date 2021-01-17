import axios from 'axios'

export default class PhoneService {
    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/phones',
            withCredentials: true
        })
    }

    getPhones = () => this.apiHandler.get('/phones') 
    getOnePhone = phoneId => this.apiHandler.get(`/phone/${phoneId}`)
}
    