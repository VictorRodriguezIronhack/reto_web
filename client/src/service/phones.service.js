import axios from 'axios'

export default class PhoneService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/telefonos',
            // baseURL: `${process.env.REACT_APP_API_URL}/books`,
            withCredentials: true
        })
    }

    getPhones = () => this.apiHandler.get('/')
    getPhone = phone_id => this.apiHandler.get(`/${phone_id}`)
}
