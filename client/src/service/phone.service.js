import axios from 'axios'

export default class PhoneService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/telefonos',
            withCredentials: true
        })
    }

    getPhones = () => this.apiHandler.get('/listado')
    getPhonesDetails = phone_id => this.apiHandler.get(`/detalles/${phone_id}`)
}