import axios from 'axios'

class PhoneService {

    constructor() {
        this.apiHandler = axios.create({
          
            baseURL: 'http://localhost:5000/api/telefonos',
            withCredentials: true
        })
    }

    getPhones = () => this.apiHandler.get('/')
    getOnePhone = phoneId => this.apiHandler.get(`/detalles/${phoneId}`)
    
}

export default PhoneService