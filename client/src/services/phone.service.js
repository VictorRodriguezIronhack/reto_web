import axios from 'axios'

class PhoneService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    getAllPhones = () => this.app.get('/telefonos')
    getOnePhone = phoneId => this.app.get(`/detalles/${phoneId}`)
}

export default PhoneService