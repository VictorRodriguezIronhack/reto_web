import axios from 'axios'

export default class TelephoneService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/telephones',
            withCredentials: true
        })
    }

    getTelephones = () => this.apiHandler.get('/')
}